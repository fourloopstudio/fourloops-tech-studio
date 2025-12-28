import { Code2, FileText, MonitorDown, MessageCircle, RefreshCcw } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'End-to-End Code Development',
    description: 'Complete project development from scratch with clean, well-documented code.',
  },
  {
    icon: FileText,
    title: 'Reports & PPTs',
    description: 'College-ready documentation and presentations that meet academic standards.',
  },
  {
    icon: MonitorDown,
    title: 'Installation & Setup',
    description: 'Full environment setup and installation assistance on your system.',
  },
  {
    icon: MessageCircle,
    title: 'Project Explanation',
    description: 'Thorough viva preparation with detailed walkthroughs of your project.',
  },
  {
    icon: RefreshCcw,
    title: 'Continuous Support',
    description: 'Ongoing support and revisions until your project is complete.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding gradient-bg relative overflow-hidden">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            End-to-End Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to successfully complete and defend your academic project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number */}
              <div className="absolute top-6 right-6 font-display text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 relative z-10">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
