import { HugeiconsIcon } from '@hugeicons/react';
import { StarIcon } from '@hugeicons/core-free-icons';

const reviews = [
  {
    name: 'Maria Santos',
    business: 'Owner, Casa Bella Bakery',
    quote: 'Orders doubled within the first month. The site paid for itself almost immediately.',
    color: 'bg-lime-300',
  },
  {
    name: 'David Okafor',
    business: 'Founder, Okafor Auto Parts',
    quote: 'They handled everything — I just answered a few questions and got a store that actually sells.',
    color: 'bg-cyan-300',
  },
  {
    name: 'Priya Nair',
    business: 'Owner, The Yoga Loft',
    quote: 'Finally show up on Google when people search near me. Bookings have never been this steady.',
    color: 'bg-pink-400',
  },
  {
    name: 'Tom Whitfield',
    business: 'Owner, Whitfield Hardware',
    quote: 'No tech headaches, no monthly surprises. Just a fast site that customers actually use.',
    color: 'bg-yellow-300',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white border-b-4 border-black px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-16 text-center">
          Businesses <span className="bg-pink-400 border-2 border-black px-2">love</span> working with us
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-stone-100 border-2 border-black p-8 transition-all hover:translate-x-1 hover:translate-y-1"
              style={{ boxShadow: '8px 8px 0 #000' }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HugeiconsIcon key={i} icon={StarIcon} size={20} color="#000" fill="#000" />
                ))}
              </div>
              <p className="font-medium text-lg mb-6">&ldquo;{review.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`${review.color} border-2 border-black w-10 h-10 flex items-center justify-center font-black uppercase`}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black uppercase text-sm">{review.name}</p>
                  <p className="font-medium text-sm text-stone-600">{review.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
