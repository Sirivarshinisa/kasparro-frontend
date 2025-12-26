import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-muted/30 relative overflow-hidden animate-in fade-in duration-700">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
          Win the AI-First Search Era
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          Run a mock AI-SEO audit to see how your brand performs in next-gen AI search.
        </p>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          Kasparro is the AI-native SEO & Brand Intelligence platform that helps you dominate 
          ChatGPT, Gemini, Perplexity, and next-generation search engines.
        </p>
        <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
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
