'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How long does it take to build my site?',
    a: 'Most businesses launch within 14 days. We handle everything — design, content, setup — so you can focus on running your business.',
  },
  {
    q: 'Do you do ecommerce stores?',
    a: 'Yes. We build fully functional online stores with payment processing, inventory management, and automatic order notifications.',
  },
  {
    q: 'What about Google Business listings?',
    a: 'We set up and optimize your listing so customers find you locally. Includes photos, hours, reviews, and direct messaging.',
  },
  {
    q: 'Can you help with web3 stuff?',
    a: 'Absolutely. We build NFT galleries, crypto payment integration, and blockchain-connected storefronts for forward-thinking businesses.',
  },
  {
    q: 'What if I already have a website?',
    a: 'We redesign and scale existing sites. Faster loading, mobile optimization, better conversion rates, and full CMS control for you.',
  },
  {
    q: 'Do I need to know tech?',
    a: 'No. We handle all the technical work. You get a simple dashboard to update your content, add products, and manage orders.',
  },
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-stone-100 border-b-4 border-black px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-16 text-center">
          Questions?
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-2 border-black bg-white"
              style={{ boxShadow: '4px 4px 0 #000' }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center p-6 font-black uppercase text-left text-lg hover:bg-stone-50 transition-colors"
              >
                {faq.q}
                <span className="text-3xl shrink-0 ml-4">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 font-medium text-lg border-t-2 border-black pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
