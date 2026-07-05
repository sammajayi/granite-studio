export default function Cta() {
  return (
    <section id="cta" className="bg-cyan-300 border-y-4 border-black py-16 md:py-24 px-6 text-center">
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
        Ready to build your online presence?
      </h2>
      <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8">
        Your free strategy call is 20 minutes. No sales pitch. Just ideas on how to grow your business.
      </p>
      <a
        href="mailto:hello@granitestudio.com?subject=Free Strategy Call"
        className="inline-block bg-black text-white border-2 border-black px-10 py-5 font-black uppercase text-lg transition-all hover:translate-x-1 hover:translate-y-1"
        style={{ boxShadow: '6px 6px 0 #fff' }}
      >
        Book a free strategy call
      </a>
    </section>
  );
}
