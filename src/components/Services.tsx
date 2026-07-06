import { HugeiconsIcon } from '@hugeicons/react';
import { GlobeIcon, ShoppingCart01Icon, MapPinIcon, ZapIcon, UserGroupIcon, BarChartIcon } from '@hugeicons/core-free-icons';

const services = [
  {
    icon: <HugeiconsIcon icon={GlobeIcon} size={28} strokeWidth={2.5} />,
    color: 'bg-lime-300',
    title: 'Professional Website',
    description: 'A fast, mobile-friendly site that tells your story and converts visitors into customers.',
  },
  {
    icon: <HugeiconsIcon icon={ShoppingCart01Icon} size={28} strokeWidth={2.5} />,
    color: 'bg-cyan-300',
    title: 'Online Store',
    description: 'Accept orders and payments online. No marketplace commissions, full control of your business.',
  },
  {
    icon: <HugeiconsIcon icon={MapPinIcon} size={28} strokeWidth={2.5} />,
    color: 'bg-yellow-300',
    title: 'Google Business',
    description: 'Optimized listings so local customers find you first. Reviews, photos, and direct messaging included.',
  },
  {
    icon: <HugeiconsIcon icon={ZapIcon} size={28} strokeWidth={2.5} />,
    color: 'bg-pink-400',
    title: 'Lightning Fast',
    description: 'Your site loads in under 2 seconds. Google ranks faster sites higher — you win customers.',
  },
  {
    icon: <HugeiconsIcon icon={BarChartIcon} size={28} strokeWidth={2.5} />,
    color: 'bg-lime-300',
    title: 'Scale-Ready',
    description: 'Built to handle growth. Start small, add features as your business grows — no rebuild needed.',
  },
  {
    icon: <HugeiconsIcon icon={UserGroupIcon} size={28} strokeWidth={2.5} />,
    color: 'bg-cyan-300',
    title: 'Web3 Ready',
    description: 'Crypto payments, NFT galleries, blockchain integration — future-proof your business today.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-stone-100 px-6 py-20 md:py-28 border-b-4 border-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-16 text-center">
          Everything your <span className="bg-lime-300 border-2 border-black px-2">business</span> needs
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white border-2 border-black p-8 transition-all hover:translate-x-1 hover:translate-y-1"
              style={{ boxShadow: '8px 8px 0 #000' }}
            >
              <div className={`${s.color} border-2 border-black w-14 h-14 flex items-center justify-center mb-4`}>
                {s.icon}
              </div>
              <h3 className="font-black uppercase text-xl mb-3">{s.title}</h3>
              <p className="font-medium">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
