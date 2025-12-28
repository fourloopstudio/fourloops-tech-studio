import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    domain: '',
    deadline: '',
    message: '',
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hi FourLoops!%0A%0A*Name:* ${formData.name}%0A*College:* ${formData.college}%0A*Domain:* ${formData.domain}%0A*Deadline:* ${formData.deadline}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/918879703614?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll get back to you as soon as possible!",
    });
  };

  const handleEmailSubmit = () => {
    const emailSubject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const emailBody = encodeURIComponent(`Hi FourLoops!\n\nName: ${formData.name}\nCollege: ${formData.college}\nDomain: ${formData.domain}\nDeadline: ${formData.deadline}\nMessage: ${formData.message}`);
    
    window.open(`mailto:fourloopstudio4@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
    
    toast({
      title: "Opening Email Client",
      description: "We'll get back to you as soon as possible!",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+91 8879703614',
      href: 'https://wa.me/918879703614',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'fourloopstudio4@gmail.com',
      href: 'mailto:fourloopstudio4@gmail.com',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@fourloop_studios',
      href: 'https://www.instagram.com/fourloop_studios',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us your deadline — we'll handle the tech.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Methods */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Reach Out Directly
            </h3>
            
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-card border border-border/50 card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{method.label}</div>
                    <div className="font-medium text-foreground">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Note */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
              <p className="text-foreground font-medium mb-2">💬 Prefer WhatsApp?</p>
              <p className="text-muted-foreground text-sm">
                Most students reach us via WhatsApp for faster responses. Just message us your requirements!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Send us a Message
            </h3>
            
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-foreground mb-2">
                    College
                  </label>
                  <Input
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="Your college name"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="domain" className="block text-sm font-medium text-foreground mb-2">
                    Domain
                  </label>
                  <Input
                    id="domain"
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    placeholder="e.g., Machine Learning"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-foreground mb-2">
                    Deadline
                  </label>
                  <Input
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    placeholder="e.g., March 2025"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  className="resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="gradient" size="xl" type="submit" className="w-full">
                  Send via WhatsApp
                  <Send className="w-5 h-5" />
                </Button>
                <Button variant="gradient" size="xl" type="button" onClick={handleEmailSubmit} className="w-full">
                  Send via Email
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
