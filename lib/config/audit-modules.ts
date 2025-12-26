/**
 * Audit Module Configuration
 * Central source of truth for all audit modules
 */

export interface AuditModuleConfig {
  id: string;
  name: string;
  category: 'visibility' | 'trust' | 'content' | 'competitive';
  order: number;
}

/**
 * List of all available audit modules
 * Add new modules here to make them available throughout the application
 */
export const AUDIT_MODULES: AuditModuleConfig[] = [
  {
    id: 'brand-visibility',
    name: 'Brand Visibility',
    category: 'visibility',
    order: 1,
  },
  {
    id: 'trust-authority',
    name: 'Trust & Authority',
    category: 'trust',
    order: 2,
  },
  {
    id: 'content-representation',
    name: 'Content Representation',
    category: 'content',
    order: 3,
  },
  {
    id: 'keyword-coverage',
    name: 'Keyword Coverage',
    category: 'visibility',
    order: 4,
  },
  {
    id: 'sentiment-positioning',
    name: 'Sentiment & Positioning',
    category: 'content',
    order: 5,
  },
  {
    id: 'source-diversity',
    name: 'Source Diversity',
    category: 'trust',
    order: 6,
  },
  {
    id: 'competitive-context',
    name: 'Competitive Context',
    category: 'competitive',
    order: 7,
  },
];

/**
 * Get all module IDs in order
 */
export const getModuleIds = (): string[] => {
  return AUDIT_MODULES.sort((a, b) => a.order - b.order).map(m => m.id);
};

/**
 * Get module config by ID
 */
export const getModuleConfig = (id: string): AuditModuleConfig | undefined => {
  return AUDIT_MODULES.find(m => m.id === id);
};

/**
 * Get modules by category
 */
export const getModulesByCategory = (category: AuditModuleConfig['category']): AuditModuleConfig[] => {
  return AUDIT_MODULES.filter(m => m.category === category).sort((a, b) => a.order - b.order);
};
