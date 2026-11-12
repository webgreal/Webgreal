'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { Menu, X } from 'lucide-react';

export default function SiteHeader() {
  const { session, profile, loading } = useAuth();
  const [open, setOpen] = useState(false);

  const accountLabel = loading ? '' : session ? 'Dashboard' : 'Log in';
  const accountHref = session ? '/dashboard' : '/login';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav py-4" id="site-header">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold font-display tracking-tight text-brand hover:text-brand-dark transition-colors duration-200">
          Webgreal
        </Link>

        <div className="hidden md:flex items-center gap-9">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-150">Home</Link>
          <Link href="/hosting" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-150">Hosting</Link>
          {profile?.is_admin && (
            <Link href="/admin" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-150">Admin</Link>
          )}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={accountHref}
            className="px-5 py-2.5 rounded-xl bg-brand text-sm font-semibold text-white hover:bg-brand-dark shadow-sm hover:shadow-md transition-all duration-250"
          >
            {accountLabel}
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl border border-gray-200/80 bg-white/70 hover:bg-gray-50 text-gray-700"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden p-6 flex flex-col gap-3 bg-white border-b border-gray-100 shadow-xl">
          <Link href="/" onClick={() => setOpen(false)} className="py-2.5 px-4 rounded-xl text-base font-semibold text-gray-800 hover:bg-brand-light/10 hover:text-brand transition-all">Home</Link>
          <Link href="/hosting" onClick={() => setOpen(false)} className="py-2.5 px-4 rounded-xl text-base font-semibold text-gray-800 hover:bg-brand-light/10 hover:text-brand transition-all">Hosting</Link>
          {profile?.is_admin && (
            <Link href="/admin" onClick={() => setOpen(false)} className="py-2.5 px-4 rounded-xl text-base font-semibold text-gray-800 hover:bg-brand-light/10 hover:text-brand transition-all">Admin</Link>
          )}
          <Link
            href={accountHref}
            onClick={() => setOpen(false)}
            className="w-full py-3.5 rounded-xl bg-brand text-center font-bold text-white hover:bg-brand-dark shadow-md mt-2"
          >
            {accountLabel}
          </Link>
        </div>
      )}
    </nav>
  );
}
