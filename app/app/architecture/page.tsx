import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function ArchitecturePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">System Architecture</h1>
          <p className="text-muted-foreground">Kasparro's AI-SEO pipeline architecture</p>
        </div>

        {/* Architecture Flow */}
        <div className="space-y-8">
          {/* Input Assembler */}
          <Card className="border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-600">Layer 1</Badge>
                <CardTitle>InputAssembler</CardTitle>
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
                <CardTitle>ContextPack</CardTitle>
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
                    Convert raw data into standardized formats for module consumption
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium">Enrichment</div>
                  <div className="flex-1 text-sm text-muted-foreground bg-muted p-3 rounded">
                    Add semantic annotations, entity linking, and contextual metadata
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium">Indexing</div>
                  <div className="flex-1 text-sm text-muted-foreground bg-muted p-3 rounded">
                    Structure data for efficient parallel processing across modules
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
                  { name: 'Content Quality', focus: 'Relevance & alignment with AI patterns' },
                  { name: 'Entity & Knowledge Graph', focus: 'Brand entity recognition' },
                  { name: 'E-E-A-T Signals', focus: 'Trust & authority indicators' },
                  { name: 'Semantic Search', focus: 'Natural language optimization' },
                  { name: 'Citation Quality', focus: 'Source trustworthiness' },
                  { name: 'Non-Branded Visibility', focus: 'Intent-driven query appearance' },
                  { name: 'Competitive Position', focus: 'Benchmarking against rivals' },
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
      </div>
    </DashboardLayout>
  );
}
