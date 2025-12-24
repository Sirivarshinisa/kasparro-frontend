import { PublicLayout } from '@/components/layout/PublicLayout';
import { Hero } from '@/components/features/marketing/Hero';
import { AIvsTraditional } from '@/components/features/marketing/AIvsTraditional';
import { ModulesOverview } from '@/components/features/marketing/ModulesOverview';
import { HowItWorks } from '@/components/features/marketing/HowItWorks';

export default function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <AIvsTraditional />
      <ModulesOverview />
      <HowItWorks />
    </PublicLayout>
  );
}
