import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Instagram, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-neural-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborate with us on groundbreaking research or discuss potential partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-neural border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Research collaboration inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell us about your research interests or collaboration ideas..."
                  className="min-h-32"
                />
              </div>
              <Button variant="neural" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 border-border/50">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-neural-gradient rounded-lg">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">Contact@Nervorum.com</p>
                  <p className="text-muted-foreground">Research@Nervorum.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-neural-gradient rounded-lg">
                  <Instagram className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Social Media</h3>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">@NervorumLLC</p>
                    <p className="text-muted-foreground">@NervorumLabs</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Research Areas</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Neural Network Optimization',
                  'Cognitive Science Research',
                  'Computational Biology',
                  'Machine Learning Applications',
                  'Neuroscience Collaboration'
                ].map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-neural-gradient rounded-full" />
                    <span className="text-foreground/80">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-surface-gradient rounded-lg border border-border/50">
              <h4 className="font-semibold text-lg mb-2">
                <span className="bg-neural-gradient bg-clip-text text-transparent">
                  Nocte Incerta, Via Certa
                </span>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                "Uncertain Night, Certain Path" - Our motto reflects our commitment to 
                navigating the complexities of neural research with precision and determination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;