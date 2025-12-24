// Core data types for Kasparro platform

export interface Brand {
  id: string;
  name: string;
  domain: string;
  industry: string;
  lastAuditDate: string;
}

export interface Score {
  value: number;
  maxValue: number;
  trend?: 'up' | 'down' | 'stable';
  changePercentage?: number;
}

export interface Insight {
  id: string;
  type: 'positive' | 'warning' | 'critical';
  title: string;
  description: string;
}

export interface Issue {
  id: string;
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: string;
}

export interface Recommendation {
  id: string;
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  expectedImpact: string;
  effort: 'low' | 'medium' | 'high';
}

export interface AuditModule {
  id: string;
  name: string;
  description: string;
  icon: string;
  score: Score;
  insights: Insight[];
  issues: Issue[];
  recommendations: Recommendation[];
  lastUpdated: string;
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
