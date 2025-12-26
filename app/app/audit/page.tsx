'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { BrandSelector } from '@/components/features/dashboard/DashboardComponents';
import { ModuleSidebar, ModuleDetailPanel } from '@/components/features/audit/AuditComponents';
import { useAppStore } from '@/lib/store';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';
import { getModuleIds } from '@/lib/config/audit-modules';

interface AuditModuleData {
  id: string;
  name: string;
  score: number;
  scoreLabel: string;
  summary: string;
  insights: string[];
  issues: Array<{
    severity: string;
    title: string;
    description: string;
  }>;
  recommendations: string[];
}

export default function AuditPage() {
  const { selectedBrand, selectedModuleId, setSelectedModuleId } = useAppStore();
  const [modules, setModules] = useState<AuditModuleData[]>([]);
  const [loading, setLoading] = useState(true);
  const moduleCount = getModuleIds().length;

  useEffect(() => {
    if (selectedBrand) {
      setLoading(true);
      const moduleIds = getModuleIds();
      Promise.all(
        moduleIds.map(id => 
          fetch(`/data/audit-modules/${id}.json`)
            .then(res => res.json())
            .catch(() => null)
        )
      ).then(results => {
        const validModules = results.filter(Boolean) as AuditModuleData[];
        setModules(validModules);
        if (validModules.length > 0 && !selectedModuleId) {
          setSelectedModuleId(validModules[0].id);
        }
        setLoading(false);
      });
    }
  }, [selectedBrand, selectedModuleId, setSelectedModuleId]);

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
              <p className="text-muted-foreground">Deep analysis across {moduleCount} core modules</p>
            </div>
            <BrandSelector />
          </div>

        {!selectedBrand ? (
          <div className="text-center py-12 text-muted-foreground">
            Select a brand to view audit
          </div>
        ) : loading ? (
          <div className="text-center py-12 text-muted-foreground">
            Loading audit data...
          </div>
        ) : modules.length > 0 ? (
          <div className="flex -mx-8 rounded-lg overflow-hidden border shadow-lg bg-background" style={{ height: 'calc(100vh - 220px)' }}>
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
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No audit data available
          </div>
        )}
        </div>
        </div>
      </DashboardLayout>
    </TooltipProvider>
  );
}
