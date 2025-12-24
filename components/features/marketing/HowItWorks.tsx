import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Input Assembly',
    description: 'Collect brand content, competitive data, and AI search patterns',
  },
  {
    number: '02',
    title: 'Context Packing',
    description: 'Structure data for comprehensive AI analysis',
  },
  {
    number: '03',
    title: 'Module Processing',
    description: '7 parallel audits evaluate different dimensions',
  },
  {
    number: '04',
    title: 'Actionable Insights',
    description: 'Prioritized recommendations with impact estimates',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-4">
          How Kasparro Works
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Our AI-native pipeline analyzes your brand's presence across next-generation search engines.
        </p>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <Card className="p-6 w-full md:w-60 border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-6">
                  <ArrowRight className="text-primary h-8 w-8 flex-shrink-0" strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
