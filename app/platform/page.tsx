import { PublicLayout } from '@/components/layout/PublicLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PlatformPage() {
  return (
    <PublicLayout>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Platform Overview</h1>
          <p className="text-xl text-muted-foreground mb-12">
            A product-first approach to AI-SEO. Understand how Kasparro bridges 
            traditional SEO thinking with the realities of AI-first search.
          </p>
          
          {/* Audit Pipeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Audit Pipeline Flow</h2>
            <Card className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <Badge className="mb-3">Input</Badge>
                  <h3 className="font-semibold mb-2">Data Collection</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Brand website content</li>
                    <li>• Competitor analysis</li>
                    <li>• AI search patterns</li>
                    <li>• Industry context</li>
                  </ul>
                </div>
                <div className="text-4xl text-muted-foreground">→</div>
                <div className="flex-1">
                  <Badge className="mb-3">Processing</Badge>
                  <h3 className="font-semibold mb-2">7 Audit Modules</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Content Quality</li>
                    <li>• Entity Recognition</li>
                    <li>• E-E-A-T Signals</li>
                    <li>• +4 more dimensions</li>
                  </ul>
                </div>
                <div className="text-4xl text-muted-foreground">→</div>
                <div className="flex-1">
                  <Badge className="mb-3">Output</Badge>
                  <h3 className="font-semibold mb-2">Actionable Insights</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Visibility scores</li>
                    <li>• Priority issues</li>
                    <li>• Recommendations</li>
                    <li>• Impact estimates</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* What Data We Consume */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">What Data Kasparro Consumes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Brand Content</h3>
                <p className="text-sm text-muted-foreground">
                  Website pages, blog posts, documentation, knowledge base articles, 
                  and any public-facing content that defines your brand voice and expertise.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Structured Data</h3>
                <p className="text-sm text-muted-foreground">
                  Schema markup, metadata, author profiles, entity relationships, 
                  and machine-readable signals AI models use for understanding.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Competitive Landscape</h3>
                <p className="text-sm text-muted-foreground">
                  How competitors appear in AI responses, their content strategies, 
                  and positioning within AI-generated recommendations.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-3">AI Search Patterns</h3>
                <p className="text-sm text-muted-foreground">
                  Real queries from ChatGPT, Perplexity, Claude, and other AI systems 
                  to understand how users discover brands in AI-first contexts.
                </p>
              </Card>
            </div>
          </div>

          {/* What Outputs Brands Receive */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">What Outputs Brands Receive</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary">01</div>
                  <div>
                    <h3 className="font-semibold mb-2">AI Visibility Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time scores showing how often and accurately your brand appears 
                      in AI-generated responses across major platforms.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary">02</div>
                  <div>
                    <h3 className="font-semibold mb-2">Prioritized Issue Reports</h3>
                    <p className="text-sm text-muted-foreground">
                      Specific problems affecting AI visibility, ranked by severity and 
                      impact on your brand's presence in AI search results.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary">03</div>
                  <div>
                    <h3 className="font-semibold mb-2">Actionable Recommendations</h3>
                    <p className="text-sm text-muted-foreground">
                      Step-by-step guidance on improving content, structured data, and 
                      brand signals with expected impact and effort estimates.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary">04</div>
                  <div>
                    <h3 className="font-semibold mb-2">Competitive Benchmarks</h3>
                    <p className="text-sm text-muted-foreground">
                      See how your AI visibility compares to competitors and identify 
                      opportunities to capture market share in AI-generated responses.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* How Kasparro Differs */}
          <div>
            <h2 className="text-2xl font-bold mb-6">How Kasparro Differs from Traditional SEO Tools</h2>
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Beyond Search Rankings</h3>
                  <p className="text-sm text-muted-foreground">
                    Traditional tools optimize for Google's algorithm. Kasparro optimizes for 
                    how AI models understand, trust, and cite your brand.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Native AI Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    We don't retrofit old SEO metrics. Our platform is built from the ground up 
                    to understand AI reasoning patterns, entity recognition, and trust signals.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Future-Proof Strategy</h3>
                  <p className="text-sm text-muted-foreground">
                    As search shifts from Google to ChatGPT, Perplexity, and other AI interfaces, 
                    Kasparro ensures your brand stays visible where users actually look for answers.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
