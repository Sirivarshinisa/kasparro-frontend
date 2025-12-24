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
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">
          How Kasparro Works
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our AI-native pipeline analyzes your brand's presence across next-generation search engines.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="p-6 h-full">
                <div className="text-4xl font-bold text-primary mb-3 opacity-50">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
