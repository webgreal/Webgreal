import { createClient } from '@supabase/supabase-js';

let client: ReturnType<typeof createClient> | null = null;

export function getSupabase() {
  if (!client) {
    client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY!
    );
  }
  return client;
}

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  business_name: string;
  is_admin: boolean;
  created_at: string;
}
