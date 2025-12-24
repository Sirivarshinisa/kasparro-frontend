import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Win the AI-First Search Era
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Run a mock AI-SEO audit to see how your brand performs in next-gen AI search.
        </p>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Kasparro is the AI-native SEO & Brand Intelligence platform that helps you dominate 
          ChatGPT, Gemini, Perplexity, and next-generation search engines.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/app/dashboard">
              Run AI-SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/platform">Learn More</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Demo audit using mocked data — real insights coming soon.
        </p>
      </div>
    </section>
  );
}
