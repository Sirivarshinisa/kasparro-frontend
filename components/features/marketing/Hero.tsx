import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 px-4 relative overflow-hidden border-b">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1fr,auto] gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-muted/50 text-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI Search Intelligence Platform</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl">
                Your brand's visibility in
                <span className="block text-muted-foreground mt-1">AI-generated answers</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Measure and optimize how ChatGPT, Perplexity, and next-gen search engines cite your content.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/app/dashboard">
                  Explore Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/platform">Technical Details</Link>
              </Button>
            </div>
          </div>

          {/* Right: Stats/Visual Element */}
          <div className="hidden md:flex flex-col gap-4 min-w-[200px]">
            <div className="p-6 rounded-lg border bg-card space-y-2">
              <div className="text-3xl font-bold">7</div>
              <div className="text-sm text-muted-foreground">Audit modules</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
