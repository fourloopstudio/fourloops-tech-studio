import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-narrow relative z-10 pt-20 md:pt-0">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/50 shadow-soft mb-8 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Premium Student Project Support
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-foreground">FourL</span>
            <span className="gradient-text">∞</span>
            <span className="text-foreground">ps</span>
          </h1>

          {/* Tagline */}
          <p 
            className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            Infinite Support for Cutting‑Edge Student Projects
          </p>

          {/* Sub-tagline */}
          <p 
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            End‑to‑end academic project development, explanation, and support 
            in advanced tech domains.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <Button variant="gradient" size="xl" asChild>
              <a href="#contact">
                Get Your Project Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#domains">
                Explore Domains
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-16 border-t border-border/50 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold gradient-text">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold gradient-text">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Domains</div>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
