'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  FileText, 
  Network, 
  Award, 
  Search, 
  Link, 
  TrendingUp, 
  Target,
  CheckCircle,
  AlertTriangle,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { AuditModule, Issue } from '@/lib/types';

/**
 * Default icon mapping for audit modules (fallback if icon not in data)
 */
const defaultIconMap: Record<string, typeof FileText> = {
  'brand-visibility': Target,
  'trust-authority': Award,
  'content-representation': FileText,
  'keyword-coverage': Search,
  'sentiment-positioning': TrendingUp,
  'source-diversity': Network,
  'competitive-context': Link,
};

/**
 * Get icon for module - uses icon from data or falls back to default mapping
 */
function getModuleIcon(moduleId: string): typeof FileText {
  return defaultIconMap[moduleId] || FileText;
}

/**
 * Module Sidebar - fully typed with AuditModule interface
 */
export function ModuleSidebar({ 
  modules, 
  selectedModuleId, 
  onSelectModule 
}: { 
  modules: AuditModule[]; 
  selectedModuleId: string | null;
  onSelectModule: (id: string) => void;
}) {
  if (!modules || modules.length === 0) {
    return (
      <div className="w-80 border-r bg-muted/20 p-4">
        <h2 className="font-semibold mb-4 px-3">Audit Modules</h2>
        <div className="text-sm text-muted-foreground px-3">
          No modules available
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 border-r bg-muted/20 p-4 space-y-2 overflow-y-auto" style={{ height: 'inherit' }}>
      <h2 className="font-semibold mb-4 px-3">Audit Modules</h2>
      {modules.map((module) => {
        const Icon = getModuleIcon(module.id);
        const isSelected = module.id === selectedModuleId;
        
        return (
          <button
            key={module.id}
            onClick={() => onSelectModule(module.id)}
            className={cn(
              'w-full text-left p-4 rounded-lg transition-colors border-2',
              isSelected 
                ? 'bg-primary text-primary-foreground border-primary' 
                : 'hover:bg-muted border-transparent hover:border-muted-foreground/20'
            )}
          >
            <div className="flex items-start gap-3">
              <div className={cn(
                'p-2 rounded-md',
                isSelected ? 'bg-primary-foreground/20' : 'bg-muted'
              )}>
                <Icon className="h-5 w-5 flex-shrink-0" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm mb-1">{module.name || 'Untitled'}</div>
                <div className={cn(
                  'text-xs',
                  isSelected ? 'text-primary-foreground/90' : 'text-muted-foreground'
                )}>
                  Score: {module.score?.value ?? 0}/100 • {module.scoreLabel || getScoreBadge(module.score?.value ?? 0).label}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

/**
 * Get severity icon based on issue severity
 */
function getSeverityIcon(severity: string) {
  switch (severity.toLowerCase()) {
    case 'high':
    case 'critical':
      return AlertCircle;
    case 'medium':
      return AlertTriangle;
    case 'low':
      return CheckCircle;
    default:
      return AlertTriangle;
  }
}

/**
 * Get severity color styling
 */
function getSeverityColor(severity: string) {
  switch (severity.toLowerCase()) {
    case 'high':
    case 'critical':
      return 'text-red-600 bg-red-50 dark:bg-red-950 dark:text-red-400';
    case 'medium':
      return 'text-orange-600 bg-orange-50 dark:bg-orange-950 dark:text-orange-400';
    case 'low':
      return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950 dark:text-yellow-400';
    default:
      return 'text-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-gray-400';
  }
}

/**
 * Get score bar color based on score value
 */
function getScoreBarColor(score: number): string {
  if (score >= 80) return 'bg-green-600';
  if (score >= 65) return 'bg-blue-600';
  if (score >= 50) return 'bg-orange-600';
  return 'bg-red-600';
}

/**
 * Get score badge based on score value
 */
function getScoreBadge(score: number): { label: string; color: string } {
  if (score >= 80) return { label: 'Excellent', color: 'bg-green-600' };
  if (score >= 65) return { label: 'Good', color: 'bg-blue-600' };
  if (score >= 50) return { label: 'Fair', color: 'bg-orange-600' };
  return { label: 'Needs Work', color: 'bg-red-600' };
}

/**
 * Module Detail Panel - fully typed with AuditModule interface
 */
export function ModuleDetailPanel({ module }: { module: AuditModule }) {
  if (!module) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center text-muted-foreground">
          No module data available
        </div>
      </div>
    );
  }

  const Icon = getModuleIcon(module.id);
  const scoreValue = module.score?.value ?? 0;
  const scoreBadge = getScoreBadge(scoreValue);

  return (
    <div className="flex-1 p-8 overflow-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{module.name || 'Untitled Module'}</h1>
            {module.summary && <p className="text-muted-foreground">{module.summary}</p>}
          </div>
        </div>

        {/* Score */}
        <Card className="bg-muted/30 border-2">
          <CardContent className="px-6 py-6">
            <div className="flex items-baseline gap-3 mb-4">
              <div className="text-6xl font-bold">{scoreValue}</div>
              <div className="text-xl text-muted-foreground">/ 100</div>
              <Badge 
                variant="secondary" 
                className={`text-sm px-3 py-1 ${scoreBadge.color} text-white`}
              >
                {module.scoreLabel || scoreBadge.label}
              </Badge>
            </div>
            <div className="w-full bg-background rounded-full h-4">
              <div 
                className={`h-4 rounded-full transition-all ${getScoreBarColor(scoreValue)}`}
                style={{ width: `${scoreValue}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      {module.insights && module.insights.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
          <div className="space-y-3">
            {module.insights.map((insight) => (
              <Card key={insight.id} className="border-l-4 border-l-blue-500 px-6 py-4">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-sm mb-1">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {module.insights && module.insights.length > 0 && <Separator className="my-8" />}

      {/* Issues */}
      {module.issues && module.issues.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Issues & Flags</h2>
          <div className="space-y-4">
            {module.issues.map((issue) => {
              const SeverityIcon = getSeverityIcon(issue.severity);
              return (
                <Card key={issue.id} className="border-l-4 border-l-red-500">
                  <CardHeader className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <Badge className={getSeverityColor(issue.severity)}>
                        <SeverityIcon className="h-3 w-3 mr-1" />
                        {issue.severity}
                      </Badge>
                      <CardTitle className="text-base flex-1">{issue.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-4">
                    <p className="text-sm text-muted-foreground">{issue.description}</p>
                    {issue.impact && (
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className="font-medium">Impact:</span> {issue.impact}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {module.issues && module.issues.length > 0 && <Separator className="my-8" />}

      {/* Recommendations */}
      {module.recommendations && module.recommendations.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
          <div className="space-y-3">
            {module.recommendations.map((rec) => (
              <Card key={rec.id} className="border-l-4 border-l-green-500 px-6 py-4">
                <CardContent className="p-0">
                  <div className="flex items-start gap-2 mb-2">
                    <h3 className="font-semibold text-sm flex-1">{rec.title}</h3>
                    {rec.priority && (
                      <Badge variant="outline" className="text-xs">
                        {rec.priority}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                  {(rec.expectedImpact || rec.effort) && (
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      {rec.expectedImpact && (
                        <span>
                          <span className="font-medium">Impact:</span> {rec.expectedImpact}
                        </span>
                      )}
                      {rec.effort && (
                        <span>
                          <span className="font-medium">Effort:</span> {rec.effort}
                        </span>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}