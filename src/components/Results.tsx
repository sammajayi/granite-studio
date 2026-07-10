const stats = [
  { value: '3.2x', color: 'text-lime-400', label: 'Average revenue increase in first year' },
  { value: '80+', color: 'text-pink-400', label: 'Small businesses now thriving online' },
];

export default function Results() {
  return (
    <section id="results" className="bg-stone-100 border-b-4 border-black px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              Real results from real{' '}
              <span className="bg-cyan-300 border-2 border-black px-2">businesses</span>
            </h2>
            <div className="space-y-6 font-medium text-lg">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <p className={`font-black uppercase text-2xl ${stat.color} mb-1`}>{stat.value}</p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=600&h=500&q=80"
              alt="Business owner reviewing an upward growth chart"
              className="w-full h-80 object-cover border-4 border-black"
              style={{ boxShadow: '12px 12px 0 #000', transform: 'rotate(-1deg)' }}
            />
            <div
              className="absolute -top-4 right-4 bg-lime-300 border-2 border-black px-4 py-2 font-black uppercase text-sm"
              style={{ transform: 'rotate(3deg)' }}
            >
              See your impact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
