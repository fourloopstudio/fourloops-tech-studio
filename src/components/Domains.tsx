import { 
  Brain, 
  BarChart3, 
  Cpu, 
  Network, 
  Bot, 
  Sparkles, 
  Shield, 
  Database, 
  Wifi,
  Zap
} from 'lucide-react';

const domains = [
  { name: 'Data Science', icon: BarChart3, description: 'Data exploration & insights' },
  { name: 'Data Analytics', icon: Database, description: 'Business intelligence' },
  { name: 'Machine Learning', icon: Cpu, description: 'Predictive modeling' },
  { name: 'Deep Learning', icon: Network, description: 'Neural networks' },
  { name: 'Artificial Intelligence', icon: Brain, description: 'Intelligent systems' },
  { name: 'Generative AI', icon: Sparkles, description: 'Content generation' },
  { name: 'Agentic AI', icon: Bot, description: 'Autonomous agents' },
  { name: 'Cyber Security', icon: Shield, description: 'Security solutions' },
  { name: 'CRM & ERP Systems', icon: Zap, description: 'Business systems' },
  { name: 'Internet of Things', icon: Wifi, description: 'Connected devices' },
];

const Domains = () => {
  return (
    <section id="domains" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cutting-Edge Domains
          </h2>
          <p className="text-muted-foreground text-lg">
            We focus only on modern, in-demand domains — not outdated syllabus projects.
          </p>
        </div>

        {/* Domain Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {domains.map((domain, index) => (
            <div
              key={domain.name}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 card-hover cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div className="mb-4 relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <domain.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-base font-semibold text-foreground mb-1 leading-tight">
                {domain.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {domain.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
