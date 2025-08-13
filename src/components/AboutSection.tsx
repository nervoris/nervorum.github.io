import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-space-gradient relative">
      {/* Subtle particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-accent/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            About Nervorum
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>

        <Card className="bg-card/30 backdrop-blur-md border-border/50 shadow-space">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-foreground mb-4">
              Welcome to Nervorum
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-center">
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                Nervorum explores <span className="text-primary font-semibold">cognitive architecture under stress</span>, 
                <span className="text-accent font-semibold"> silence</span>, and 
                <span className="text-primary font-semibold"> entropic collapse</span>. 
                This is where neurodivergence meets design, and silence becomes signal.
              </p>
              
              <p>
                We have conducted early-stage synthesis of novel compounds targeting signaling pathways 
                for therapeutic use in Parkinson's and attention disorders. Our work includes drafting 
                and filing provisional patent claims and modeling molecular affinity.
              </p>
              
              <p>
                Our goal is to map cognition outside the bounds of normative behavior, emphasizing 
                an ethical approach, cognitive modulation and using new-generation techniques to 
                contribute further to the understanding of neural architectures.
              </p>
            </div>

            <div className="pt-8 border-t border-border/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">Ethics</div>
                  <p className="text-sm text-foreground/60">Responsible cognitive exploration</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">Innovation</div>
                  <p className="text-sm text-foreground/60">New-generation techniques</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">Understanding</div>
                  <p className="text-sm text-foreground/60">Neural architecture mapping</p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-2">
              <p className="text-foreground/60 italic text-lg">
                "When others stall in the dark, we build."
              </p>
              <p className="text-sm text-muted-foreground font-mono tracking-wider">
                NOCTE INCERTA, VIA CERTA
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;