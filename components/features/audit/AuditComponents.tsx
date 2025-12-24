'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAppStore } from '@/lib/store';
import { AuditModule } from '@/lib/types';
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

const iconMap: Record<string, typeof FileText> = {
  FileText,
  Network,
  Award,
  Search,
  Link,
  TrendingUp,
  Target,
};

export function ModuleSidebar({ 
  modules, 
  selectedModuleId, 
  onSelectModule 
}: { 
  modules: AuditModule[]; 
  selectedModuleId: string | null;
  onSelectModule: (id: string) => void;
}) {
  return (
    <div className="w-80 border-r bg-muted/20 p-4 space-y-2">
      <h2 className="font-semibold mb-4 px-3">Audit Modules</h2>
      {modules.map((module) => {
        const Icon = iconMap[module.icon] || FileText;
        const isSelected = module.id === selectedModuleId;
        
        return (
          <button
            key={module.id}
            onClick={() => onSelectModule(module.id)}
            className={cn(
              'w-full text-left p-3 rounded-lg transition-colors',
              isSelected 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-muted'
            )}
          >
            <div className="flex items-start gap-3">
              <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{module.name}</div>
                <div className={cn(
                  'text-xs mt-1',
                  isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'
                )}>
                  Score: {module.score.value}/{module.score.maxValue}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export function ModuleDetailPanel({ module }: { module: AuditModule }) {
  const Icon = iconMap[module.icon] || FileText;
  const scorePercentage = (module.score.value / module.score.maxValue) * 100;

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
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
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
      case 'critical':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-orange-600 bg-orange-50';
      case 'low':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'positive':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-orange-50 border-orange-200';
      case 'critical':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="flex-1 p-8 overflow-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{module.name}</h1>
            <p className="text-muted-foreground">{module.description}</p>
          </div>
        </div>

        {/* Score */}
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <div className="flex items-baseline gap-3 mb-3">
              <div className="text-5xl font-bold">{module.score.value}</div>
              <div className="text-xl text-muted-foreground">/ {module.score.maxValue}</div>
              {module.score.trend && (
                <Badge variant={module.score.trend === 'up' ? 'default' : 'secondary'}>
                  {module.score.trend === 'up' ? '↑' : module.score.trend === 'down' ? '↓' : '→'} 
                  {' '}{module.score.changePercentage}%
                </Badge>
              )}
            </div>
            <div className="w-full bg-background rounded-full h-3">
              <div 
                className="bg-primary h-3 rounded-full transition-all" 
                style={{ width: `${scorePercentage}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      {module.insights.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
          <div className="space-y-3">
            {module.insights.map((insight) => (
              <Card key={insight.id} className={cn('border-2', getTypeColor(insight.type))}>
                <CardHeader>
                  <CardTitle className="text-base">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <Separator className="my-8" />

      {/* Issues */}
      {module.issues.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Issues & Flags</h2>
          <div className="space-y-4">
            {module.issues.map((issue) => {
              const SeverityIcon = getSeverityIcon(issue.severity);
              return (
                <Card key={issue.id}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Badge className={getSeverityColor(issue.severity)}>
                        <SeverityIcon className="h-3 w-3 mr-1" />
                        {issue.severity}
                      </Badge>
                      <CardTitle className="text-base flex-1">{issue.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">{issue.description}</p>
                    <div className="bg-muted p-3 rounded text-sm">
                      <strong>Impact:</strong> {issue.impact}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      <Separator className="my-8" />

      {/* Recommendations */}
      {module.recommendations.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
          <div className="space-y-4">
            {module.recommendations.map((rec) => (
              <Card key={rec.id} className="border-primary/30">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-base">{rec.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant={rec.priority === 'high' ? 'default' : 'secondary'}>
                        {rec.priority} priority
                      </Badge>
                      <Badge variant="outline">{rec.effort} effort</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <div className="text-xs font-medium text-green-900 mb-1">Expected Impact</div>
                      <div className="text-sm text-green-700">{rec.expectedImpact}</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded border border-blue-200">
                      <div className="text-xs font-medium text-blue-900 mb-1">Implementation Effort</div>
                      <div className="text-sm text-blue-700 capitalize">{rec.effort}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
        Last updated: {new Date(module.lastUpdated).toLocaleString()}
      </div>
    </div>
  );
}
