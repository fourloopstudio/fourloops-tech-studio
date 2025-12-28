import { Rocket, Brain, RefreshCcw, GraduationCap, Zap, Code2 } from 'lucide-react';

const reasons = [
  {
    icon: Rocket,
    title: 'Cutting-edge & Future-ready',
    description: 'We work with the latest technologies and in-demand domains.',
  },
  {
    icon: Brain,
    title: 'Real-world Experience',
    description: 'Experience in building production-quality projects.',
  },
  {
    icon: RefreshCcw,
    title: 'Infinite Support Mindset',
    description: 'Not one-time delivery — we support until you succeed.',
  },
  {
    icon: GraduationCap,
    title: 'Student-friendly Explanations',
    description: 'Viva-focused teaching that makes you understand.',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable',
    description: 'Quick response times and dependable guidance.',
  },
  {
    icon: Code2,
    title: 'Clean Code Architecture',
    description: 'Well-structured, documented, and maintainable code.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding gradient-bg relative overflow-hidden">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why FourLoops
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just deliver projects — we make sure you understand them.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative flex gap-5 p-6 rounded-2xl bg-card border border-border/50 card-hover"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-card border border-border/50 max-w-2xl">
            <p className="font-display text-xl md:text-2xl font-medium text-foreground italic">
              "We don't just deliver projects — we make sure you understand them."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
