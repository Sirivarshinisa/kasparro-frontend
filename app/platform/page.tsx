import { PublicLayout } from '@/components/layout/PublicLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PlatformPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto max-w-[1400px]">
          <h1 className="text-4xl font-bold mb-4">Product Mechanics</h1>
          <p className="text-xl text-muted-foreground mb-12">
            How Kasparro processes brand data and generates AI-SEO intelligence.
          </p>
          
          {/* Audit Pipeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Audit Pipeline</h2>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <Badge className="mb-3">Input</Badge>
                  <h3 className="font-semibold mb-2">InputAssembler</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Brand content ingestion</li>
                    <li>• Competitor data collection</li>
                    <li>• AI query patterns</li>
                    <li>• Structured data extraction</li>
                  </ul>
                </div>
                <div className="text-4xl text-muted-foreground">→</div>
                <div className="flex-1">
                  <Badge className="mb-3">Context</Badge>
                  <h3 className="font-semibold mb-2">ContextPack</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Normalize content</li>
                    <li>• Build entity graph</li>
                    <li>• Extract signals</li>
                    <li>• Prepare for analysis</li>
                  </ul>
                </div>
                <div className="text-4xl text-muted-foreground">→</div>
                <div className="flex-1">
                  <Badge className="mb-3">Modules</Badge>
                  <h3 className="font-semibold mb-2">7 Audit Modules</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Brand Visibility</li>
                    <li>• Trust & Authority</li>
                    <li>• Content Representation</li>
                    <li>• +4 more dimensions</li>
                  </ul>
                </div>
                <div className="text-4xl text-muted-foreground">→</div>
                <div className="flex-1">
                  <Badge className="mb-3">Output</Badge>
                  <h3 className="font-semibold mb-2">Results</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Scores per module</li>
                    <li>• Issues & flags</li>
                    <li>• Recommendations</li>
                    <li>• Priority actions</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Input: What Data We Consume */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Input: Data Sources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-3">Brand Content</h3>
                <p className="text-sm text-muted-foreground">
                  Public web content, documentation, metadata, and structured data.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-3">Competitive Data</h3>
                <p className="text-sm text-muted-foreground">
                  How competitors appear in AI-generated responses and their positioning.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-3">AI Query Patterns</h3>
                <p className="text-sm text-muted-foreground">
                  Real queries from ChatGPT, Perplexity, and other AI systems.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-3">Entity Relationships</h3>
                <p className="text-sm text-muted-foreground">
                  Connections between brand, products, people, and industry concepts.
                </p>
              </Card>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Deep Dive</h2>
            <div className="space-y-4">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-3">How We Measure AI Visibility</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Unlike traditional SEO tools that track search rankings, Kasparro evaluates brand 
                  presence in AI-generated responses. We run controlled queries across multiple AI systems, 
                  extracting brand mentions, citation patterns, competitive positioning, and sentiment.
                </p>
                <div className="bg-muted p-4 rounded text-xs font-mono">
                  <div className="mb-2 text-foreground">Example Query Flow:</div>
                  <div>1. Generate query set from brand keywords + intent patterns</div>
                  <div>2. Execute queries via API (Perplexity, You.com) or simulate with local LLM</div>
                  <div>3. Parse responses: extract entities, citations, positioning</div>
                  <div>4. Score visibility: mention frequency, citation rank, context quality</div>
                  <div>5. Compare vs. baseline + competitors</div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-semibold mb-3">Entity Graph Construction</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We build a knowledge graph specific to your brand, mapping relationships between 
                  entities (brand, products, people, concepts) and their attributes. This mirrors how 
                  AI models internally represent information and helps identify missing connections.
                </p>
                <div className="bg-muted p-4 rounded text-xs">
                  <div className="font-semibold mb-2">Graph Components:</div>
                  <div className="ml-4 space-y-1 text-muted-foreground">
                    <div>• <strong>Nodes:</strong> Entities (brand, products, people, competitors, concepts)</div>
                    <div>• <strong>Edges:</strong> Relationships (produces, competes-with, authoredBy, relatedTo)</div>
                    <div>• <strong>Attributes:</strong> Entity properties (description, category, authority score)</div>
                    <div>• <strong>Provenance:</strong> Where relationships are documented (URLs, sources)</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-semibold mb-3">Trust Signal Analysis</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  AI models prioritize authoritative sources. We evaluate E-E-A-T signals: 
                  Experience, Expertise, Authoritativeness, and Trustworthiness—analyzing author credentials, 
                  publication reputation, citation patterns, and content quality markers.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-xs">
                  <div className="bg-muted p-3 rounded">
                    <div className="font-semibold mb-1">Experience Signals</div>
                    <div className="text-muted-foreground">First-hand accounts, case studies, original research, product usage evidence</div>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <div className="font-semibold mb-1">Expertise Signals</div>
                    <div className="text-muted-foreground">Author credentials, academic citations, industry recognition, technical depth</div>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <div className="font-semibold mb-1">Authoritativeness</div>
                    <div className="text-muted-foreground">Domain reputation, backlink quality, media mentions, industry partnerships</div>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <div className="font-semibold mb-1">Trustworthiness</div>
                    <div className="text-muted-foreground">HTTPS, privacy policies, transparent sourcing, fact-checking, update frequency</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Output: What Brands Receive */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Output: Deliverables</h2>
            <div className="space-y-4">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary">01</div>
                  <div>
                    <h3 className="font-semibold mb-2">Module Scores</h3>
                    <p className="text-sm text-muted-foreground">
                      Quantitative scores for each of 7 audit modules showing performance across dimensions.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary">02</div>
                  <div>
                    <h3 className="font-semibold mb-2">Issue Detection</h3>
                    <p className="text-sm text-muted-foreground">
                      Specific problems ranked by severity with descriptions of impact on AI visibility.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary">03</div>
                  <div>
                    <h3 className="font-semibold mb-2">Recommendations</h3>
                    <p className="text-sm text-muted-foreground">
                      Actionable steps to improve scores with effort and impact estimates.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary">04</div>
                  <div>
                    <h3 className="font-semibold mb-2">Trend Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Historical changes in visibility and trust metrics over time.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Differentiator */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Key Differentiator</h2>
            <Card className="p-8 bg-primary/5 border-primary/20 hover:shadow-lg transition-shadow">
              <p className="text-sm text-muted-foreground">
                Kasparro is built for AI-first search, not retrofitted from traditional SEO tools. 
                The platform analyzes how AI models understand, trust, and cite brands — not just search engine rankings.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
