'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AlertCircle, Loader2 } from 'lucide-react';

/**
 * Loading skeleton for cards
 */
export function LoadingSkeleton({ count = 1 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="animate-pulse">
          <CardHeader>
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-muted rounded w-1/2"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="h-8 bg-muted rounded w-1/3"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

/**
 * Centered loading spinner
 */
export function LoadingSpinner({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}

/**
 * Error message display
 */
export function ErrorMessage({ 
  message = 'Data temporarily unavailable. Please try again.',
  retry 
}: { 
  message?: string;
  retry?: () => void;
}) {
  return (
    <Card className="border-destructive/50">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full bg-destructive/10 p-3">
            <AlertCircle className="h-6 w-6 text-destructive" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Unable to Load Data</h3>
            <p className="text-sm text-muted-foreground max-w-md">{message}</p>
          </div>
          {retry && (
            <button
              onClick={retry}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Try Again
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Empty state display
 */
export function EmptyState({ 
  message = 'No data available yet.',
  description
}: { 
  message?: string;
  description?: string;
}) {
  return (
    <Card>
      <CardContent className="pt-12 pb-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full bg-muted p-4">
            <AlertCircle className="h-8 w-8 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">{message}</h3>
            {description && (
              <p className="text-sm text-muted-foreground max-w-md">{description}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
