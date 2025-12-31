// Core data types for Kasparro platform

export interface Brand {
  id: string;
  name: string;
  domain: string;
  industry: string;
  lastAuditDate: string;
}

export type TrendType = 'up' | 'down' | 'stable';
export type SeverityLevel = 'high' | 'medium' | 'low' | 'critical';
export type PriorityLevel = 'high' | 'medium' | 'low';
export type EffortLevel = 'low' | 'medium' | 'high';
export type InsightType = 'positive' | 'warning' | 'critical';

export interface Score {
  value: number;
  maxValue: number;
  trend?: TrendType;
  changePercentage?: number;
}

export interface Insight {
  id: string;
  type: InsightType;
  title: string;
  description: string;
}

export interface Insight {
  id: string;
  type: InsightType;
  title: string;
  description: string;
}

export interface Issue {
  id: string;
  severity: string;
  title: string;
  description: string;
  impact: string;
}

export interface Recommendation {
  id: string;
  priority: string;
  title: string;
  description: string;
  expectedImpact: string;
  effort: string;
}

export interface AuditModule {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  score: Score;
  scoreLabel: string;
  summary: string;
  insights: Insight[];
  issues: Issue[];
  recommendations: Recommendation[];
}

export interface DashboardMetrics {
  aiVisibilityScore: Score;
  trustScore: Score;
  keywordCoverage: Score;
  lastAuditTimestamp: string;
}

export interface AuditData {
  brandId: string;
  modules: AuditModule[];
  metrics: DashboardMetrics;
  generatedAt: string;
}

// API Response types for error handling
export interface DataResult<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

// Brand data structure from JSON
export type BrandList = Brand[];

// Audit modules data structure from JSON  
export type AuditModulesData = Record<string, AuditModule[]>;

// Dashboard metrics data structure from JSON
export type DashboardMetricsData = Record<string, DashboardMetrics>;
