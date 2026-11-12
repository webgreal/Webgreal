'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import { useAuth } from '@/lib/auth';

const included = [
  'Fast, reliable hosting',
  'Professional domain included',
  'SSL certificate',
  'Technical support',
];

const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$24',
    per: '/month',
    badge: null as string | null,
    description: 'Flexible month-to-month hosting with everything included.',
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '$200',
    per: '/year',
    badge: 'Save $88',
    description: 'Two months free compared to paying monthly.',
  },
];

export default function HostingPage() {
  const { session, loading } = useAuth();
  const [checkoutPlan, setCheckoutPlan] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-white selection:bg-brand/15 selection:text-brand" id="hosting-page">
      <SiteHeader />

      <header className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div className="absolute top-[10%] left-[-15%] w-[50%] h-[400px] bg-brand-light/35 glow-orb animate-pulse-slow rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[45%] h-[500px] bg-blue-100/30 glow-orb animate-pulse-slow rounded-full" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">Hosting + Domain Subscription</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-gray-950 mt-3 mb-6">
            Everything your website needs, in one plan
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hosting, a professional domain, SSL certificate, and technical support — one simple subscription, no surprises.
          </p>
        </div>
      </header>

      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="glass-card glass-card-hover rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden"
              id={`plan-card-${plan.id}`}
            >
              {plan.badge && (
                <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  {plan.badge}
                </span>
              )}

              <h2 className="text-xl font-bold font-display text-gray-950 mb-3">{plan.name}</h2>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-extrabold font-display tracking-tight text-brand">{plan.price}</span>
                <span className="text-sm font-medium text-gray-500">{plan.per}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">{plan.description}</p>

              <ul className="space-y-3 mb-10">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                {checkoutPlan === plan.id ? (
                  <div
                    className="w-full py-4 rounded-2xl border border-brand/20 bg-brand-light/20 text-center text-sm font-semibold text-brand"
                    id={`checkout-placeholder-${plan.id}`}
                  >
                    Checkout for the {plan.name.toLowerCase()} plan is coming soon. We will email you once it is live.
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      if (loading) return;
                      if (!session) {
                        window.location.href = '/signup';
                      } else {
                        setCheckoutPlan(plan.id);
                      }
                    }}
                    className="w-full py-4 rounded-2xl bg-brand hover:bg-brand-dark text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                    id={`get-started-${plan.id}`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {!session && !loading && (
          <p className="text-center text-xs text-gray-400 font-mono mt-10">
            You will be asked to create an account before checkout.
          </p>
        )}
      </section>
    </div>
  );
}
