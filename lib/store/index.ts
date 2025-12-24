import { create } from 'zustand';
import { Brand, AuditModule } from '@/lib/types';

interface AppState {
  selectedBrand: Brand | null;
  selectedModuleId: string | null;
  setSelectedBrand: (brand: Brand | null) => void;
  setSelectedModuleId: (moduleId: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedBrand: null,
  selectedModuleId: null,
  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
  setSelectedModuleId: (moduleId) => set({ selectedModuleId: moduleId }),
}));
