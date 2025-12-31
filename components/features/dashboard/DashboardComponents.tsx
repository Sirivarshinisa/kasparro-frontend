'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAppStore } from '@/lib/store';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  LoadingSkeleton, 
  LoadingSpinner, 
  ErrorMessage, 
  EmptyState 
} from '@/components/ui/loading-states';
import { 
  fetchBrands, 
  fetchDashboardMetrics 
} from '@/lib/services/data-service';
import type { Brand, DashboardMetrics, Score } from '@/lib/types';

/**
 * Brand Selector Component with error handling
 */
export function BrandSelector() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { selectedBrand, setSelectedBrand } = useAppStore();

  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = async () => {
    setIsLoading(true);
    setError(null);
    
    const result = await fetchBrands();
    
    if (result.error || !result.data) {
      setError(result.error || 'Failed to load brands');
      setIsLoading(false);
      return;
    }
    
    setBrands(result.data);
    
    // Auto-select first brand if none selected
    if (result.data.length > 0 && !selectedBrand) {
      setSelectedBrand(result.data[0]);
    }
    
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="w-64 h-10 bg-muted animate-pulse rounded-md"></div>
    );
  }

  if (error || brands.length === 0) {
    return (
      <div className="text-sm text-destructive">
        Unable to load brands
      </div>
    );
  }

  return (
    <Select
      value={selectedBrand?.id}
      onValueChange={(value) => {
        const brand = brands.find((b) => b.id === value);
        if (brand) setSelectedBrand(brand);
      }}
    >
      <SelectTrigger className="w-64">
        <SelectValue placeholder="Select a brand" />
      </SelectTrigger>
      <SelectContent>
        {brands.map((brand) => (
          <SelectItem key={brand.id} value={brand.id}>
            {brand.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

/**
 * Get score badge configuration
 */
function getScoreBadge(value: number): { label: string; color: string } {
  if (value >= 80) return { label: 'Excellent', color: 'bg-green-600' };
  if (value >= 65) return { label: 'Good', color: 'bg-blue-600' };
  if (value >= 50) return { label: 'Fair', color: 'bg-orange-600' };
  return { label: 'Needs Work', color: 'bg-red-600' };
}

/**
 * Get trend icon and color
 */
function getTrendDisplay(trend?: string) {
  const TrendIcon = 
    trend === 'up' ? TrendingUp :
    trend === 'down' ? TrendingDown :
    Minus;
  
  const trendColor = 
    trend === 'up' ? 'text-green-600' :
    trend === 'down' ? 'text-red-600' :
    'text-muted-foreground';

  return { TrendIcon, trendColor };
}

/**
 * Snapshot Card Component - fully data-driven
 */
export function SnapshotCard({ 
  title, 
  value,
  change,
  description,
  trend
}: { 
  title: string; 
  value: number;
  change: string;
  description: string;
  trend?: string;
}) {
  const scoreBadge = getScoreBadge(value);
  const { TrendIcon, trendColor } = getTrendDisplay(trend);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Badge className={`${scoreBadge.color} text-white`}>{scoreBadge.label}</Badge>
        </div>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-4">
        <div className="flex items-baseline gap-2 mb-3">
          <div className="text-4xl font-bold">{value}</div>
          <div className="text-sm text-muted-foreground">/ 100</div>
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${trendColor}`}>
          <TrendIcon className="h-4 w-4" />
          <span>{change}</span>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Dashboard Metrics Display - fully data-driven with error handling
 */
export function DashboardMetricsDisplay({ brandId }: { brandId: string }) {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMetrics();
  }, [brandId]);

  const loadMetrics = async () => {
    setIsLoading(true);
    setError(null);
    
    const result = await fetchDashboardMetrics(brandId);
    
    if (result.error || !result.data) {
      setError(result.error || 'Failed to load metrics');
      setMetrics(null);
    } else {
      setMetrics(result.data);
    }
    
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <LoadingSkeleton count={3} />
      </div>
    );
  }

  if (error || !metrics) {
    return <ErrorMessage message={error || undefined} retry={loadMetrics} />;
  }

  // Helper to format score data
  const formatScore = (score: Score) => {
    const changeSign = (score.changePercentage ?? 0) >= 0 ? '+' : '';
    const changeText = `${changeSign}${score.changePercentage ?? 0}%`;
    return { changeText, trend: score.trend };
  };

  const aiVisibility = formatScore(metrics.aiVisibilityScore);
  const trust = formatScore(metrics.trustScore);
  const keyword = formatScore(metrics.keywordCoverage);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <SnapshotCard
        title="AI Visibility Score"
        value={metrics.aiVisibilityScore.value}
        change={aiVisibility.changeText}
        description="How often AI models cite your brand"
        trend={aiVisibility.trend}
      />
      <SnapshotCard
        title="Trust & Authority"
        value={metrics.trustScore.value}
        change={trust.changeText}
        description="E-E-A-T signal strength"
        trend={trust.trend}
      />
      <SnapshotCard
        title="Keyword Coverage"
        value={metrics.keywordCoverage.value}
        change={keyword.changeText}
        description="Target keyword alignment"
        trend={keyword.trend}
      />
    </div>
  );
}
