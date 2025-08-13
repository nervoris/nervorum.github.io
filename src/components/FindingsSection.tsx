import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, Calendar, Atom } from 'lucide-react';

const FindingsSection = () => {
  const findings = [
    {
      title: "Signaling Pathway Therapeutics",
      description: "Drafted and filed provisional patent claims for novel compounds targeting therapeutic use in Parkinson's and attention disorders. Molecular affinity modeling completed.",
      category: "Patent Research",
      date: "2024",
      status: "Filed",
      impact: "Therapeutic Applications",
    },
    {
      title: "Cognitive Stress Mapping",
      description: "Comprehensive analysis of cognitive architecture under stress conditions, revealing new patterns in neurodivergent processing mechanisms.",
      category: "Cognitive Science",
      date: "2024", 
      status: "In Progress",
      impact: "Architectural Understanding",
    },
    {
      title: "Entropic Signal Processing",
      description: "Investigation into how silence becomes signal within entropic collapse scenarios, bridging neurodivergence and design methodologies.",
      category: "Signal Theory",
      date: "2023",
      status: "Published",
      impact: "Design Integration",
    },
  ];

  return (
    <section id="findings" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Findings
          </h2>
          <div className="w-24 h-px bg-accent mx-auto" />
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Discoveries at the intersection of cognition, design, and therapeutic innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {findings.map((finding, index) => (
            <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-space">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    variant={finding.status === 'Published' ? 'default' : finding.status === 'Filed' ? 'secondary' : 'outline'}
                    className="border-accent/30"
                  >
                    {finding.status}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {finding.date}
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                  {finding.title}
                </CardTitle>
                <CardDescription className="text-sm text-accent/60 font-medium flex items-center">
                  <Atom className="h-4 w-4 mr-1" />
                  {finding.category}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed text-sm">
                  {finding.description}
                </p>
                <div className="pt-2 border-t border-border/30">
                  <div className="text-xs text-muted-foreground mb-3">
                    <span className="font-medium">Impact:</span> {finding.impact}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-accent/30 text-accent hover:bg-accent/10">
                      <FileText className="h-4 w-4 mr-2" />
                      Read
                    </Button>
                    <Button variant="outline" size="sm" className="border-border/50 hover:border-accent/30">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-foreground/60 italic">
            "Emphasizing an ethical approach, cognitive modulation and using new-generation techniques"
          </p>
          <Button variant="outline" size="lg" className="border-accent/50 text-accent hover:bg-accent/10">
            Explore All Findings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FindingsSection;