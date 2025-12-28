import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showInfinity, setShowInfinity] = useState(false);
  const [showRest, setShowRest] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const taglineWords = ['Infinite', 'Support', 'for', 'Cutting‑Edge', 'Student', 'Projects'];
  const [displayedTagline, setDisplayedTagline] = useState<string[]>([]);

  useEffect(() => {
    // Animate "FourL" first
    const text = 'FourL';
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        // Show infinity symbol after "FourL"
        setTimeout(() => {
          setShowInfinity(true);
          // Show "ps" after infinity
          setTimeout(() => {
            setShowRest(true);
          }, 400);
        }, 300);
      }
    }, 120);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (!showRest) return;
    
    // Start tagline animation after logo is complete
    const taglineTimeout = setTimeout(() => {
      const wordInterval = setInterval(() => {
        setCurrentWordIndex(prev => {
          if (prev < taglineWords.length) {
            setDisplayedTagline(words => [...words, taglineWords[prev]]);
            return prev + 1;
          } else {
            clearInterval(wordInterval);
            return prev;
          }
        });
      }, 200);

      return () => clearInterval(wordInterval);
    }, 400);

    return () => clearTimeout(taglineTimeout);
  }, [showRest]);

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

          {/* Main Heading with Typing Animation */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">{displayedText}</span>
            <span 
              className={`gradient-text transition-all duration-500 ${showInfinity ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
              style={{ display: 'inline-block' }}
            >
              ∞
            </span>
            <span 
              className={`text-foreground transition-all duration-300 ${showRest ? 'opacity-100' : 'opacity-0'}`}
            >
              ps
            </span>
            <span 
              className={`inline-block w-[3px] h-[0.8em] bg-primary ml-1 align-middle transition-opacity duration-100 ${showRest ? 'animate-pulse' : 'opacity-100'}`}
              style={{ animationDuration: '1s' }}
            />
          </h1>

          {/* Tagline with Word Animation */}
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 mb-4 min-h-[2.5rem]">
            {displayedTagline.map((word, index) => (
              <span 
                key={index} 
                className="inline-block animate-fade-in mr-2"
                style={{ animationDuration: '0.3s' }}
              >
                {word}
              </span>
            ))}
          </p>

          {/* Sub-tagline */}
          <p 
            className={`text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-500 ${displayedTagline.length === taglineWords.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            End‑to‑end academic project development, explanation, and support 
            in advanced tech domains.
          </p>

          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 delay-300 ${displayedTagline.length === taglineWords.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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
            className={`grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-16 border-t border-border/50 transition-all duration-500 delay-500 ${displayedTagline.length === taglineWords.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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
