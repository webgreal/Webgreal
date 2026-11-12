'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { createClient, type SupabaseClient, type Session } from '@supabase/supabase-js';
import type { Profile } from './supabase';

const SupabaseContext = createContext<SupabaseClient | null>(null);

export function SupabaseProvider({
  url,
  anonKey,
  children,
}: {
  url: string;
  anonKey: string;
  children: ReactNode;
}) {
  const [client] = useState<SupabaseClient>(() => createClient(url, anonKey));
  return <SupabaseContext.Provider value={client}>{children}</SupabaseContext.Provider>;
}

export function useSupabase(): SupabaseClient {
  const client = useContext(SupabaseContext);
  if (!client) throw new Error('useSupabase must be used within SupabaseProvider');
  return client;
}

export function useAuth() {
  const supabase = useSupabase();
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load(currentSession: Session | null) {
      if (cancelled) return;
      setSession(currentSession);
      if (currentSession) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', currentSession.user.id)
          .maybeSingle();
        if (!cancelled) setProfile(data);
      } else {
        setProfile(null);
      }
      if (!cancelled) setLoading(false);
    }

    supabase.auth.getSession().then(({ data }) => load(data.session));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      load(newSession);
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [supabase]);

  return { loading, session, profile, supabase };
}
