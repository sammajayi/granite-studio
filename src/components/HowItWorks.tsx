const steps = [
  {
    number: '1',
    title: 'Book a free call',
    description: 'Tell us about your business in 20 minutes. We ask the right questions and share ideas.',
  },
  {
    number: '2',
    title: 'We build your site',
    description: 'Our team designs, codes, and sets up everything. You stay updated; no surprises.',
  },
  {
    number: '3',
    title: 'Launch & grow',
    description: "Your site goes live. We train you on the dashboard. You're in control — no ongoing fees.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-lime-300 border-b-4 border-black px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-16 text-center">
          3 simple steps
        </h2>
        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <div
                className="bg-black border-2 border-black w-16 h-16 shrink-0 flex items-center justify-center font-black text-3xl text-lime-300"
                style={{ boxShadow: '4px 4px 0 #000' }}
              >
                {step.number}
              </div>
              <div>
                <h3 className="font-black uppercase text-2xl mb-2">{step.title}</h3>
                <p className="font-medium text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
