import { Check, Crown, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Basic',
    subtitle: 'Code Only',
    description: 'Best for confident students who need just the code.',
    icon: Zap,
    features: [
      'Project code',
      'Basic explanation',
      'No major changes',
      'No long-term support',
    ],
    recommended: false,
  },
  {
    name: 'Standard',
    subtitle: 'Guided Build',
    description: 'Best for students with partial work who need guidance.',
    icon: Star,
    features: [
      'Code + changes',
      'Installation support',
      'Explanation support',
      'Limited revisions',
    ],
    recommended: false,
  },
  {
    name: 'Premium',
    subtitle: 'Complete End-to-End',
    description: 'Best for final year / major projects requiring full support.',
    icon: Crown,
    features: [
      'Code + Reports + PPT',
      'Unlimited changes',
      'Full installation & setup',
      'Deep explanation & viva prep',
      'Full support till submission',
    ],
    recommended: true,
  },
];

const ServiceTiers = () => {
  return (
    <section id="pricing" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl opacity-50" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing Tiers
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your Level
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible options to match your project needs and budget.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative p-8 rounded-3xl transition-all duration-300 ${
                tier.recommended
                  ? 'bg-gradient-to-b from-primary/10 to-accent/10 border-2 border-primary/30 scale-105 shadow-glow'
                  : 'bg-card border border-border/50 hover:border-primary/30'
              }`}
            >
              {/* Recommended Badge */}
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                tier.recommended
                  ? 'bg-gradient-to-br from-primary to-accent'
                  : 'bg-secondary'
              }`}>
                <tier.icon className={`w-7 h-7 ${
                  tier.recommended ? 'text-primary-foreground' : 'text-primary'
                }`} />
              </div>

              {/* Header */}
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {tier.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">
                  {tier.subtitle}
                </p>
                <p className="text-muted-foreground text-sm">
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      tier.recommended
                        ? 'bg-primary/20 text-primary'
                        : 'bg-secondary text-muted-foreground'
                    }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={tier.recommended ? 'gradient' : 'outline'}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTiers;
