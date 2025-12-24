import { PublicLayout } from '@/components/layout/PublicLayout';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <PublicLayout>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">About Kasparro</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Building the intelligence layer for AI-first search
          </p>

          {/* Mission */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe the future of search is conversational, powered by AI models that understand 
              context and synthesize information. Traditional SEO was built for algorithms that rank 
              pages. Kasparro is built for AI systems that answer questions.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our mission is to give brands the tools and insights they need to thrive in this new era—where 
              visibility isn't about ranking #1 on Google, but about being the trusted source AI models cite.
            </p>
          </Card>

          {/* Product Philosophy */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Product Philosophy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">AI-Native, Not Retrofitted</h3>
                <p className="text-sm text-muted-foreground">
                  We don't take old SEO metrics and slap "AI" on them. Every module, signal, and 
                  recommendation is designed specifically for how AI models consume and trust information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Clarity Over Complexity</h3>
                <p className="text-sm text-muted-foreground">
                  AI-SEO is inherently complex, but our product shouldn't be. We distill sophisticated 
                  analysis into clear scores, prioritized issues, and actionable recommendations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Insight, Not Just Data</h3>
                <p className="text-sm text-muted-foreground">
                  We don't dump dashboards full of metrics. Every data point exists to inform a decision. 
                  Every recommendation includes expected impact and effort estimates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Built for the Long Game</h3>
                <p className="text-sm text-muted-foreground">
                  Search is shifting from Google to ChatGPT, Perplexity, and platforms we haven't seen yet. 
                  Kasparro is architected to evolve with the AI search landscape, not chase short-term hacks.
                </p>
              </div>
            </div>
          </Card>

          {/* Vision */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Vision for AI-First Search</h2>
            <p className="text-muted-foreground leading-relaxed">
              In five years, the majority of online queries won't happen in a search engine. They'll happen 
              in AI assistants, chatbots, and intelligent agents that synthesize answers from trusted sources.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Brands that understand this shift—and optimize for entity recognition, trust signals, and 
              AI reasoning patterns—will dominate their categories. Those that stick to traditional SEO 
              playbooks will become invisible.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Kasparro exists to be the definitive platform for brands navigating this transition. 
              We're not just tracking AI-SEO metrics; we're defining what AI-SEO means.
            </p>
          </Card>

          {/* Founder Note */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground italic">
              Kasparro is built by engineers and product thinkers who've spent years in search, 
              AI, and brand intelligence. We're not selling you a dream—we're building the infrastructure 
              for a search paradigm that's already here.
            </p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
