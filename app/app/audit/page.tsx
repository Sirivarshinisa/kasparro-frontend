'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { BrandSelector } from '@/components/features/dashboard/DashboardComponents';
import { ModuleSidebar, ModuleDetailPanel } from '@/components/features/audit/AuditComponents';
import { useAppStore } from '@/lib/store';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';
import { fetchAuditModules } from '@/lib/services/data-service';
import { LoadingSpinner, ErrorMessage, EmptyState } from '@/components/ui/loading-states';
import type { AuditModule } from '@/lib/types';

export default function AuditPage() {
  const { selectedBrand, selectedModuleId, setSelectedModuleId } = useAppStore();
  const [modules, setModules] = useState<AuditModule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedBrand) {
      loadModules();
    }
  }, [selectedBrand?.id]);

  const loadModules = async () => {
    if (!selectedBrand) return;
    
    setLoading(true);
    setError(null);
    
    const result = await fetchAuditModules(selectedBrand.id);
    
    if (result.error || !result.data) {
      setError(result.error || 'Failed to load audit modules');
      setModules([]);
    } else {
      setModules(result.data);
      // Auto-select first module if none selected
      if (result.data.length > 0 && !selectedModuleId) {
        setSelectedModuleId(result.data[0].id);
      }
    }
    
    setLoading(false);
  };

  const selectedModule = modules.find((m) => m.id === selectedModuleId);

  return (
    <TooltipProvider>
      <DashboardLayout>
        <div className="bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-[1800px] mx-auto px-8 py-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">AI-SEO Audit</h1>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <HelpCircle className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Each module analyzes a specific dimension of your brand's AI visibility, providing scores, insights, and actionable recommendations.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <p className="text-muted-foreground">
                {modules.length > 0 ? `Deep analysis across ${modules.length} core modules` : 'Comprehensive AI-SEO audit'}
              </p>
            </div>
            <BrandSelector />
          </div>

        {!selectedBrand ? (
          <div className="py-12">
            <EmptyState message="Select a brand to view audit" />
          </div>
        ) : loading ? (
          <div className="py-12">
            <LoadingSpinner message="Loading audit data..." />
          </div>
        ) : error ? (
          <div className="py-12">
            <ErrorMessage message={error} retry={loadModules} />
          </div>
        ) : modules.length === 0 ? (
          <div className="py-12">
            <EmptyState message="No audit modules available for this brand" />
          </div>
        ) : (
          <div className="flex rounded-lg border bg-card overflow-hidden shadow-lg" style={{ height: '70vh' }}>
            <ModuleSidebar
              modules={modules}
              selectedModuleId={selectedModuleId}
              onSelectModule={setSelectedModuleId}
            />
            {selectedModule ? (
              <ModuleDetailPanel module={selectedModule} />
            ) : (
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="text-center max-w-md">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold mb-2">Select a Module to View Insights</h3>
                  <p className="text-muted-foreground">
                    Choose an audit module from the sidebar to see detailed scores, insights, issues, and recommendations.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
        </div>
        </div>
      </DashboardLayout>
    </TooltipProvider>
  );
}