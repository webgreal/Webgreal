'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import { useAuth } from '@/lib/auth';

export default function LoginPage() {
  const { supabase, session, loading: authLoading } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!authLoading && session) {
    router.replace('/dashboard');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });
      if (error) {
        setError(error.message);
        return;
      }
      router.replace('/dashboard');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand glass-input';

  return (
    <div className="relative min-h-screen bg-white selection:bg-brand/15 selection:text-brand" id="login-page">
      <SiteHeader />

      <div className="pt-32 pb-24 md:pt-40 flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute top-[15%] left-[-12%] w-[40%] h-[400px] bg-brand-light/35 glow-orb animate-pulse-slow rounded-full" />

        <div className="glass-card rounded-3xl p-8 md:p-12 w-full max-w-md relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">Welcome Back</span>
          <h1 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-gray-950 mt-2 mb-2">
            Log in to your account
          </h1>
          <p className="text-sm text-gray-600 mb-8">Manage your hosting, websites and payments.</p>

          <form onSubmit={handleSubmit} className="space-y-4" id="login-form">
            <div>
              <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
                className={inputClass}
                id="login-email"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Password *</label>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Your password"
                className={inputClass}
                id="login-password"
              />
            </div>

            {error && <p className="text-xs text-red-500 font-mono" id="login-error">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-brand text-white font-semibold flex items-center justify-center gap-2 hover:bg-brand-dark transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-50"
              id="login-submit"
            >
              {submitting ? 'Logging in...' : 'Log in'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            No account yet?{' '}
            <Link href="/signup" className="text-brand font-semibold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
