import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, TrendingUp, FileText, Trophy, X, Check } from 'lucide-react';

const differences = [
  {
    aspect: 'Target',
    icon: Target,
    traditional: 'Google search algorithms',
    aiFirst: 'AI model training data & reasoning patterns',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    aspect: 'Metrics',
    icon: TrendingUp,
    traditional: 'Rankings, backlinks, domain authority',
    aiFirst: 'Entity recognition, citation quality, trust signals',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    aspect: 'Content',
    icon: FileText,
    traditional: 'Keyword-optimized pages',
    aiFirst: 'Structured knowledge, clear expertise signals',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    aspect: 'Success',
    icon: Trophy,
    traditional: 'Top 3 Google ranking',
    aiFirst: 'Brand mentioned in AI responses',
    color: 'from-green-500/20 to-emerald-500/20',
  },
];

export function AIvsTraditional() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-muted/30 to-background animate-in fade-in duration-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-[1400px] relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
          Why AI-SEO is Different
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150">
          Traditional SEO tactics don't work when AI models generate answers. 
          You need a fundamentally different approach.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {differences.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <Card 
                key={diff.aspect} 
                className={`relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-in fade-in zoom-in-95 duration-500 bg-gradient-to-br ${diff.color}`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                {/* Icon badge */}
                <div className="absolute top-4 right-4">
                  <div className="p-3 bg-background/80 backdrop-blur-sm rounded-xl border shadow-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    {diff.aspect}
                    <Badge variant="secondary" className="text-xs">Comparison</Badge>
                  </h3>
                  
                  {/* Traditional approach */}
                  <div className="mb-6 p-4 rounded-lg bg-background/60 backdrop-blur-sm border border-muted">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-1.5 bg-red-500/10 rounded-full mt-0.5">
                        <X className="h-4 w-4 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-muted-foreground mb-1">Traditional SEO</p>
                        <p className="text-sm leading-relaxed">{diff.traditional}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI-First approach */}
                  <div className="p-4 rounded-lg bg-primary/5 backdrop-blur-sm border-2 border-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-primary mb-1">AI-First Approach</p>
                        <p className="text-sm leading-relaxed font-medium">{diff.aiFirst}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA highlight */}
        <div className="text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/30 hover:border-primary/50 transition-colors hover:shadow-lg">
            <p className="text-sm font-semibold text-primary mb-2">The Bottom Line</p>
            <p className="text-lg font-medium max-w-2xl">
              Kasparro analyzes what AI models actually see, understand, and trust about your brand
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
