import { Button } from '@/components/ui/button';
import { ChevronRight, Brain } from 'lucide-react';
import spaceStars from '@/assets/space-stars.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${spaceStars})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground">
              Nervorum
            </h1>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-foreground/90 font-light tracking-wider">
                Nocte Incerta, Via Certa
              </p>
              <p className="text-lg text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                Exploring cognitive architecture under stress, silence, and entropic collapse. 
                This is where neurodivergence meets design, and silence becomes signal.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button variant="outline" size="xl" className="group border-primary/50 text-primary hover:bg-primary/10">
              Research
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="group border-accent/50 text-accent hover:bg-accent/10">
              <Brain className="mr-2 h-5 w-5" />
              Findings
            </Button>
          </div>

          {/* Bottom tagline */}
          <div className="pt-16 space-y-4">
            <div className="text-center text-sm text-muted-foreground italic">
              "When others stall in the dark, we build."
            </div>
            <div className="text-xs text-muted-foreground">
              Nocte Incerta, Via Certa
            </div>
            <div className="text-xs text-muted-foreground">
              Nervorum LLC © 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;