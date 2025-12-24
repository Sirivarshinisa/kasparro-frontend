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
import { Brand, DashboardMetrics } from '@/lib/types';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function BrandSelector() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const { selectedBrand, setSelectedBrand } = useAppStore();

  useEffect(() => {
    fetch('/data/brands.json')
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        if (data.length > 0 && !selectedBrand) {
          setSelectedBrand(data[0]);
        }
      });
  }, [selectedBrand, setSelectedBrand]);

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

export function SnapshotCard({ 
  title, 
  score, 
  description 
}: { 
  title: string; 
  score: { value: number; maxValue: number; trend?: string; changePercentage?: number }; 
  description: string;
}) {
  const percentage = (score.value / score.maxValue) * 100;
  
  const TrendIcon = 
    score.trend === 'up' ? TrendingUp :
    score.trend === 'down' ? TrendingDown :
    Minus;
  
  const trendColor = 
    score.trend === 'up' ? 'text-green-600' :
    score.trend === 'down' ? 'text-red-600' :
    'text-muted-foreground';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <div className="text-3xl font-bold">{score.value}</div>
          <div className="text-sm text-muted-foreground">/ {score.maxValue}</div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1 bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all" 
              style={{ width: `${percentage}%` }}
            />
          </div>
          {score.trend && score.changePercentage !== undefined && (
            <div className={`flex items-center gap-1 text-xs font-medium ${trendColor}`}>
              <TrendIcon className="h-3 w-3" />
              {Math.abs(score.changePercentage)}%
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardMetricsDisplay({ brandId }: { brandId: string }) {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);

  useEffect(() => {
    fetch('/data/dashboard-metrics.json')
      .then((res) => res.json())
      .then((data) => {
        setMetrics(data[brandId]);
      });
  }, [brandId]);

  if (!metrics) {
    return <div>Loading metrics...</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <SnapshotCard
        title="AI Visibility Score"
        score={metrics.aiVisibilityScore}
        description="How often your brand appears in AI responses"
      />
      <SnapshotCard
        title="Trust / E-E-A-T Score"
        score={metrics.trustScore}
        description="Experience, Expertise, Authority, Trust signals"
      />
      <SnapshotCard
        title="Non-Branded Coverage"
        score={metrics.keywordCoverage}
        description="Visibility in intent-driven, non-branded queries"
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Last Audit</CardTitle>
          <CardDescription className="text-xs">Most recent data refresh</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {new Date(metrics.lastAuditTimestamp).toLocaleDateString()}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {new Date(metrics.lastAuditTimestamp).toLocaleTimeString()}
          </div>
          <Badge variant="secondary" className="mt-3">Up to date</Badge>
        </CardContent>
      </Card>
    </div>
  );
}
