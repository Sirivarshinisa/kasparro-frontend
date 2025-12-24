import { Card } from '@/components/ui/card';

const differences = [
  {
    aspect: 'Target',
    traditional: 'Google search algorithms',
    aiFirst: 'AI model training data & reasoning patterns',
  },
  {
    aspect: 'Metrics',
    traditional: 'Rankings, backlinks, domain authority',
    aiFirst: 'Entity recognition, citation quality, trust signals',
  },
  {
    aspect: 'Content',
    traditional: 'Keyword-optimized pages',
    aiFirst: 'Structured knowledge, clear expertise signals',
  },
  {
    aspect: 'Success',
    traditional: 'Top 3 Google ranking',
    aiFirst: 'Brand mentioned in AI responses',
  },
];

export function AIvsTraditional() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why AI-SEO is Different
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Traditional SEO tactics don't work when AI models generate answers. 
          You need a fundamentally different approach.
        </p>
        <div className="grid gap-4">
          {differences.map((diff) => (
            <Card key={diff.aspect} className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="font-semibold">{diff.aspect}</div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Traditional:</span> {diff.traditional}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-primary">AI-First:</span> {diff.aiFirst}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
