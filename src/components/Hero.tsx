export default function Hero() {
  return (
    <header className="bg-stone-100 border-b-4 border-black px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-block bg-cyan-300 border-2 border-black px-4 py-2 font-black uppercase text-sm mb-6"
              style={{ transform: 'rotate(-2deg)', boxShadow: '4px 4px 0 #000' }}
            >
              ★ Trusted by 80+ small businesses
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Your business{' '}
              <span
                className="bg-lime-300 px-2 border-2 border-black inline-block"
                style={{ transform: 'rotate(-1deg)' }}
              >
                online
              </span>
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-2xl mb-8 leading-relaxed">
              Build a website, launch an online store, optimize your Google listing, and scale your business — all without touching code.
            </p>
            <a
              href="#cta"
              className="inline-block bg-lime-300 border-2 border-black px-8 py-4 font-black uppercase transition-all hover:translate-x-1 hover:translate-y-1 text-center"
              style={{ boxShadow: '4px 4px 0 #000' }}
            >
              Book a free strategy call
            </a>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/business-laptop/600/500"
              alt="Small business owner working on laptop with online store dashboard"
              className="w-full h-80 object-cover border-4 border-black"
              style={{ boxShadow: '12px 12px 0 #000', transform: 'rotate(1deg)' }}
            />
            <div
              className="absolute -bottom-4 -left-4 bg-cyan-300 border-2 border-black px-4 py-2 font-black uppercase text-sm"
              style={{ transform: 'rotate(-3deg)', boxShadow: '4px 4px 0 #000' }}
            >
              14-day launch
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
