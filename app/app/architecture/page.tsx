import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

export default function ArchitecturePage() {
  return (
    <TooltipProvider>
      <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-[1600px] mx-auto px-8 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold">System Architecture</h1>
          <p className="text-muted-foreground">
            Data flow through Kasparro's 4-layer pipeline: InputAssembler → ContextPack → Audit Modules → Output Surfaces
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="space-y-8">
          {/* Input Assembler */}
          <Card className="border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-600">Layer 1</Badge>
                <CardTitle className="flex items-center gap-2">
                  InputAssembler
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <HelpCircle className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>Collects raw data from your brand content, competitors, and AI search patterns to begin the analysis process.</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </div>
              <CardDescription>
                Collects and structures raw data from multiple sources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-muted p-4 rounded">
                  <h4 className="font-semibold text-sm mb-2">Brand Content</h4>
                  <p className="text-xs text-muted-foreground">
                    Crawl website, blog posts, documentation
                  </p>
                </div>
                <div className="bg-muted p-4 rounded">
                  <h4 className="font-semibold text-sm mb-2">Structured Data</h4>
                  <p className="text-xs text-muted-foreground">
                    Schema markup, metadata, entity signals
                  </p>
                </div>
                <div className="bg-muted p-4 rounded">
                  <h4 className="font-semibold text-sm mb-2">Competitors</h4>
                  <p className="text-xs text-muted-foreground">
                    Competitive landscape analysis
                  </p>
                </div>
                <div className="bg-muted p-4 rounded">
                  <h4 className="font-semibold text-sm mb-2">AI Patterns</h4>
                  <p className="text-xs text-muted-foreground">
                    Query data from AI search engines
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-muted-foreground" />
          </div>

          {/* Context Pack */}
          <Card className="border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge className="bg-purple-600">Layer 2</Badge>
                <CardTitle className="flex items-center gap-2">
                  ContextPack
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <HelpCircle className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>Transforms raw data into structured format, enriching it with semantic annotations and entity relationships for deeper analysis.</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </div>
              <CardDescription>
                Normalizes and enriches data for comprehensive analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium">Normalization</div>
                  <div className="flex-1 text-sm text-muted-foreground bg-muted p-3 rounded">
                    Convert raw HTML, PDF, and structured data into standardized JSON schemas. 
                    Extract clean text, remove boilerplate, preserve semantic structure (headings, lists, tables). 
                    Apply content deduplication and canonical URL resolution.
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium">Enrichment</div>
                  <div className="flex-1 text-sm text-muted-foreground bg-muted p-3 rounded">
                    Run NER models to identify entities (people, orgs, products, locations). 
                    Apply semantic embeddings (sentence transformers) for similarity analysis. 
                    Link entities to knowledge bases (DBpedia, Wikidata) and build brand-specific entity graph. 
                    Extract metadata: authorship, publish dates, update frequency, schema.org annotations.
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium">Indexing</div>
                  <div className="flex-1 text-sm text-muted-foreground bg-muted p-3 rounded">
                    Create inverted indices for keyword lookup, vector indices for semantic search, 
                    and graph databases for relationship traversal. Partition data by content type, 
                    recency, and domain authority for optimized module access. Generate content fingerprints 
                    for change detection and incremental updates.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-muted-foreground" />
          </div>

          {/* Audit Modules */}
          <Card className="border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-600">Layer 3</Badge>
                <CardTitle>Audit Modules (Parallel Processing)</CardTitle>
              </div>
              <CardDescription>
                7 specialized modules analyze different dimensions simultaneously
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { name: 'Brand Visibility', focus: 'How often brand appears in AI responses' },
                  { name: 'Trust & Authority', focus: 'E-E-A-T signals and credibility' },
                  { name: 'Content Representation', focus: 'Accuracy of brand content in AI outputs' },
                  { name: 'Keyword Coverage', focus: 'Non-branded query visibility' },
                  { name: 'Sentiment & Positioning', focus: 'How brand is positioned by AI' },
                  { name: 'Source Diversity', focus: 'Breadth of citations and mentions' },
                  { name: 'Competitive Context', focus: 'Relative positioning vs. competitors' },
                ].map((module, i) => (
                  <div key={i} className="bg-muted p-4 rounded border-l-4 border-primary">
                    <h4 className="font-semibold text-sm mb-1">{module.name}</h4>
                    <p className="text-xs text-muted-foreground">{module.focus}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-muted-foreground" />
          </div>

          {/* Output Surfaces */}
          <Card className="border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge className="bg-orange-600">Layer 4</Badge>
                <CardTitle>Output Surfaces</CardTitle>
              </div>
              <CardDescription>
                Synthesized insights delivered through multiple interfaces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-base">Dashboard View</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• High-level scores</li>
                      <li>• Trend indicators</li>
                      <li>• Quick snapshots</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-base">Audit Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Module deep-dives</li>
                      <li>• Issue reports</li>
                      <li>• Recommendations</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-base">API Endpoints</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Programmatic access</li>
                      <li>• Integration hooks</li>
                      <li>• Webhook alerts</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Notes */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="text-lg">Architectural Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Modularity:</strong> Each audit module operates independently, enabling 
                parallel processing and easy addition of new analysis dimensions.
              </div>
              <div>
                <strong>Data Pipeline:</strong> Clear separation between data collection (InputAssembler), 
                normalization (ContextPack), analysis (Modules), and presentation (Output Surfaces).
              </div>
              <div>
                <strong>Scalability:</strong> Architecture supports multiple brands, automated scheduling, 
                and incremental updates without full re-processing.
              </div>
              <div>
                <strong>AI-Native Design:</strong> Every component is optimized for analyzing how AI 
                models consume and trust information, not traditional search engine algorithms.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Implementation Details */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">Technical Implementation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Machine Learning Stack</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• <strong>Embeddings:</strong> Sentence transformers for semantic similarity (all-MiniLM-L6-v2, mpnet-base)</li>
                  <li>• <strong>NER:</strong> spaCy and fine-tuned BERT models for entity extraction</li>
                  <li>• <strong>Sentiment:</strong> Transformer-based models for nuanced tone analysis</li>
                  <li>• <strong>Classification:</strong> Custom models trained on AI search result patterns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Infrastructure</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• <strong>Graph DB:</strong> Neo4j for entity relationship mapping</li>
                  <li>• <strong>Vector Store:</strong> Pinecone/Weaviate for semantic search</li>
                  <li>• <strong>Time-series:</strong> InfluxDB for tracking metric evolution</li>
                  <li>• <strong>Cache:</strong> Redis for real-time performance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Processing Pipeline</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• <strong>Queue:</strong> RabbitMQ for distributed task processing</li>
                  <li>• <strong>Workers:</strong> Celery for parallel module execution</li>
                  <li>• <strong>Scheduling:</strong> Apache Airflow for orchestration</li>
                  <li>• <strong>Monitoring:</strong> Prometheus + Grafana for pipeline health</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">AI Search Integration</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• <strong>APIs:</strong> Direct integration with Perplexity, You.com APIs</li>
                  <li>• <strong>Simulation:</strong> Local LLM inference for testing (Llama, Mistral)</li>
                  <li>• <strong>Pattern Analysis:</strong> Custom parsers for citation extraction</li>
                  <li>• <strong>Continuous Monitoring:</strong> Automated query execution + diff tracking</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </DashboardLayout>
    </TooltipProvider>
  );
}
