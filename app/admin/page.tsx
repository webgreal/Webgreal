'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import { useAuth } from '@/lib/auth';

export default function AdminPage() {
  const { session, profile, loading } = useAuth();
  const router = useRouter();
  const isAdmin = profile?.is_admin === true;

  useEffect(() => {
    if (!loading && !session) {
      router.replace('/login');
    }
  }, [loading, session, router]);

  if (loading || !session) {
    return (
      <div className="min-h-screen bg-white" id="admin-loading">
        <SiteHeader />
        <div className="pt-40 flex items-center justify-center">
          <span className="text-sm font-mono text-gray-400">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-white" id="admin-forbidden">
        <SiteHeader />
        <div className="pt-40 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-2xl font-bold font-display text-gray-950 mb-2">Access restricted</h1>
          <p className="text-sm text-gray-500">This area is only available to administrators.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white selection:bg-brand/15 selection:text-brand" id="admin-page">
      <SiteHeader />

      <div className="pt-32 pb-24 md:pt-40 max-w-5xl mx-auto px-6 relative overflow-hidden">
        <div className="absolute top-[5%] left-[-10%] w-[40%] h-[400px] bg-brand-light/35 glow-orb animate-pulse-slow rounded-full" />

        <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">Admin Console</span>
        <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-gray-950 mt-2 mb-12">
          Administration
        </h1>

        <div className="glass-card rounded-3xl p-10 md:p-16 flex flex-col items-center justify-center text-center relative z-10" id="admin-placeholder">
          <div className="w-14 h-14 rounded-2xl bg-brand-light border border-brand/10 flex items-center justify-center mb-5">
            <span className="text-xl">⚙️</span>
          </div>
          <h2 className="text-lg font-bold font-display text-gray-950 mb-2">Admin tools coming soon</h2>
          <p className="text-sm text-gray-500 max-w-sm">
            You will manage customers, websites, subscriptions and payments from here.
          </p>
        </div>
      </div>
    </div>
  );
}
