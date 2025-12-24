'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { BrandSelector, DashboardMetricsDisplay } from '@/components/features/dashboard/DashboardComponents';
import { useAppStore } from '@/lib/store';

export default function DashboardPage() {
  const { selectedBrand } = useAppStore();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Brand intelligence snapshot</p>
          </div>
          <BrandSelector />
        </div>

        {selectedBrand ? (
          <DashboardMetricsDisplay brandId={selectedBrand.id} />
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            Select a brand to view metrics
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
