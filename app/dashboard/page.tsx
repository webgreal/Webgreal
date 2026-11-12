'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import { useAuth } from '@/lib/auth';

export default function DashboardPage() {
  const { session, profile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.replace('/login');
    }
  }, [loading, session, router]);

  if (loading || !session) {
    return (
      <div className="min-h-screen bg-white" id="dashboard-loading">
        <SiteHeader />
        <div className="pt-40 flex items-center justify-center">
          <span className="text-sm font-mono text-gray-400">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white selection:bg-brand/15 selection:text-brand" id="dashboard-page">
      <SiteHeader />

      <div className="pt-32 pb-24 md:pt-40 max-w-5xl mx-auto px-6 relative overflow-hidden">
        <div className="absolute top-[5%] right-[-10%] w-[40%] h-[400px] bg-brand-light/35 glow-orb animate-pulse-slow rounded-full" />

        <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">Your Account</span>
        <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-gray-950 mt-2 mb-4">
          Welcome{profile?.full_name ? `, ${profile.full_name}` : ''}!
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-12 max-w-2xl">
          Your dashboard is being set up. Soon you will see your hosting subscription, website progress, and invoices here.
        </p>

        <div className="glass-card rounded-3xl p-10 md:p-16 flex flex-col items-center justify-center text-center relative z-10" id="dashboard-placeholder">
          <div className="w-14 h-14 rounded-2xl bg-brand-light border border-brand/10 flex items-center justify-center mb-5">
            <span className="text-xl">🚧</span>
          </div>
          <h2 className="text-lg font-bold font-display text-gray-950 mb-2">Nothing here yet</h2>
          <p className="text-sm text-gray-500 max-w-sm mb-6">
            Once you subscribe to a hosting plan, your subscription details and website status will appear here.
          </p>
          <Link
            href="/hosting"
            className="px-6 py-3 rounded-xl bg-brand text-white text-sm font-semibold hover:bg-brand-dark shadow-sm hover:shadow-md transition-all"
            id="dashboard-hosting-cta"
          >
            View Hosting Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
