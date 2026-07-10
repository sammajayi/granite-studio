'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How long does it take to build my site?',
    a: "Build time depends on the scope of your project. A simple site moves faster than a full ecommerce store or custom integration. We'll give you a clear timeline on your free strategy call.",
  },
  {
    q: 'Do you do ecommerce stores?',
    a: 'Yes. We build fully functional online stores with payment processing, inventory management, and automatic order notifications.',
  },
  {
    q: 'What about Google Business listings?',
    a: 'We set up and optimise your listing so customers find you locally. Includes photos, hours, reviews, and direct messaging.',
  },
  {
    q: 'Do you build web3 projects?',
    a: "Yes. Our team has versatile strengths across industries — we've shipped payment systems, infrastructure products, NFT platforms, and more. Whatever you're building, we've likely built something close.",
  },
  {
    q: 'Do I need to understand tech?',
    a: 'Not at all. We provide everything you need to manage your business. If you can use a smartphone, you have all the tech knowledge required.',
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
