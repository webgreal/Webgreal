'use client';

import SiteHeader from '@/components/SiteHeader';

export default function GiveawayTermsPage() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-brand/15 selection:text-brand" id="giveaway-terms-page">
      <SiteHeader />

      <div className="pt-32 pb-24 md:pt-40 max-w-3xl mx-auto px-6">
        <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">Legal</span>
        <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-gray-950 mt-2 mb-10">
          Giveaway Terms &amp; Conditions
        </h1>

        <div className="glass-card rounded-3xl p-8 md:p-12" id="giveaway-terms-content">
          <p className="text-sm text-gray-500 leading-relaxed">
            The terms and conditions for our giveaway will be published here shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
