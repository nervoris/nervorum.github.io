import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, Microscope, Brain, Zap } from 'lucide-react';

const ResearchSection = () => {
  const researchAreas = [
    {
      title: "Cognitive Architecture Under Stress",
      description: "Mapping cognition outside the bounds of normative behavior, emphasizing ethical approaches to cognitive modulation.",
      icon: Brain,
      focus: "Stress Response",
    },
    {
      title: "Novel Compound Synthesis", 
      description: "Early-stage synthesis of novel compounds targeting signaling pathways for therapeutic use in Parkinson's and attention disorders.",
      icon: Microscope,
      focus: "Molecular Affinity",
    },
    {
      title: "Entropic Collapse Studies",
      description: "Investigating cognitive responses to entropy and silence, where neurodivergence meets design principles.",
      icon: Zap,
      focus: "Signal Processing",
    },
  ];

  return (
    <section id="research" className="py-24 bg-space-gradient relative">
      {/* Subtle star field overlay */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Research
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Advancing understanding through innovative methodologies and ethical exploration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-space">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono tracking-wider uppercase">
                    {area.focus}
                  </span>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 border-primary/30 text-primary hover:bg-primary/10">
                    <FileText className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                  <Button variant="outline" size="sm" className="border-border/50 hover:border-primary/30">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-foreground/60 italic mb-6">
            "Our goal is to map cognition outside the bounds of normative behavior"
          </p>
          <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10">
            View Detailed Research
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;