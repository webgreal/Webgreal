'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import { useAuth } from '@/lib/auth';

export default function SignupPage() {
  const { supabase, session, loading: authLoading } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ fullName: '', phone: '', businessName: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!authLoading && session) {
    router.replace('/dashboard');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.fullName || !form.email || !form.password) {
      setError('Please fill in your name, email and password.');
      return;
    }
    setSubmitting(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            full_name: form.fullName,
            phone: form.phone,
            business_name: form.businessName,
          },
        },
      });
      if (error) {
        setError(error.message);
        return;
      }
      // Email confirmation is off: a session is returned immediately.
      if (data.session) {
        router.replace('/dashboard');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand glass-input';

  return (
    <div className="relative min-h-screen bg-white selection:bg-brand/15 selection:text-brand" id="signup-page">
      <SiteHeader />

      <div className="pt-32 pb-24 md:pt-40 flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[400px] bg-brand-light/35 glow-orb animate-pulse-slow rounded-full" />

        <div className="glass-card rounded-3xl p-8 md:p-12 w-full max-w-md relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">Create Account</span>
          <h1 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-gray-950 mt-2 mb-2">
            Get started with Webgreal
          </h1>
          <p className="text-sm text-gray-600 mb-8">Sign up to manage your hosting and websites.</p>

          <form onSubmit={handleSubmit} className="space-y-4" id="signup-form">
            <div>
              <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                placeholder="Jane Doe"
                className={inputClass}
                id="signup-name"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Phone Number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+355690000000"
                className={inputClass}
                id="signup-phone"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Business Name</label>
              <input
                type="text"
                value={form.businessName}
                onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                placeholder="Acme Inc."
                className={inputClass}
                id="signup-business"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
                className={inputClass}
                id="signup-email"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Password *</label>
              <input
                type="password"
                required
                minLength={8}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="At least 8 characters"
                className={inputClass}
                id="signup-password"
              />
            </div>

            {error && <p className="text-xs text-red-500 font-mono" id="signup-error">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-brand text-white font-semibold flex items-center justify-center gap-2 hover:bg-brand-dark transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-50"
              id="signup-submit"
            >
              {submitting ? 'Creating account...' : 'Create Account'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-brand font-semibold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
