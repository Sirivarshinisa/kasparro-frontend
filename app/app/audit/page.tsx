'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { BrandSelector } from '@/components/features/dashboard/DashboardComponents';
import { ModuleSidebar, ModuleDetailPanel } from '@/components/features/audit/AuditComponents';
import { useAppStore } from '@/lib/store';
import { AuditModule } from '@/lib/types';

export default function AuditPage() {
  const { selectedBrand, selectedModuleId, setSelectedModuleId } = useAppStore();
  const [modules, setModules] = useState<AuditModule[]>([]);

  useEffect(() => {
    if (selectedBrand) {
      fetch('/data/audit-modules.json')
        .then((res) => res.json())
        .then((data) => {
          const brandModules = data[selectedBrand.id] || [];
          setModules(brandModules);
          if (brandModules.length > 0 && !selectedModuleId) {
            setSelectedModuleId(brandModules[0].id);
          }
        });
    }
  }, [selectedBrand, selectedModuleId, setSelectedModuleId]);

  const selectedModule = modules.find((m) => m.id === selectedModuleId);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">AI-SEO Audit</h1>
            <p className="text-muted-foreground">Deep analysis across 7 core modules</p>
          </div>
          <BrandSelector />
        </div>

        {selectedBrand && modules.length > 0 ? (
          <div className="flex -mx-6 -mb-6" style={{ height: 'calc(100vh - 200px)' }}>
            <ModuleSidebar 
              modules={modules} 
              selectedModuleId={selectedModuleId}
              onSelectModule={setSelectedModuleId}
            />
            {selectedModule && (
              <ModuleDetailPanel module={selectedModule} />
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            {!selectedBrand ? 'Select a brand to view audit' : 'Loading audit data...'}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
