/**
 * Data Service Layer
 * Handles all data fetching with proper error handling and type safety
 */

import type {
  Brand,
  BrandList,
  AuditModule,
  AuditModulesData,
  DashboardMetrics,
  DashboardMetricsData,
  DataResult,
} from '@/lib/types';

/**
 * Generic fetch function with error handling and validation
 */
async function fetchJSON<T>(url: string, validate?: (data: unknown) => boolean): Promise<DataResult<T>> {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Resource not found: ${url}`);
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Optional validation
    if (validate && !validate(data)) {
      throw new Error('Data validation failed');
    }
    
    return {
      data,
      error: null,
      isLoading: false,
    };
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Failed to load data',
      isLoading: false,
    };
  }
}

/**
 * Fetch all brands
 */
export async function fetchBrands(): Promise<DataResult<BrandList>> {
  return fetchJSON<BrandList>('/data/brands.json', (data) => {
    return Array.isArray(data) && data.length > 0;
  });
}

/**
 * Fetch dashboard metrics for a specific brand
 */
export async function fetchDashboardMetrics(
  brandId: string
): Promise<DataResult<DashboardMetrics>> {
  if (!brandId) {
    return {
      data: null,
      error: 'Brand ID is required',
      isLoading: false,
    };
  }

  const result = await fetchJSON<DashboardMetricsData>('/data/dashboard-metrics.json');
  
  if (result.error || !result.data) {
    return {
      data: null,
      error: result.error || 'No data available',
      isLoading: false,
    };
  }
  
  const brandMetrics = result.data[brandId];
  
  if (!brandMetrics) {
    return {
      data: null,
      error: `No metrics found for brand: ${brandId}`,
      isLoading: false,
    };
  }
  
  // Validate metrics structure
  if (!brandMetrics.aiVisibilityScore || !brandMetrics.trustScore || !brandMetrics.keywordCoverage) {
    return {
      data: null,
      error: 'Invalid metrics data structure',
      isLoading: false,
    };
  }
  
  return {
    data: brandMetrics,
    error: null,
    isLoading: false,
  };
}

/**
 * Fetch audit modules for a specific brand
 */
export async function fetchAuditModules(
  brandId: string
): Promise<DataResult<AuditModule[]>> {
  if (!brandId) {
    return {
      data: null,
      error: 'Brand ID is required',
      isLoading: false,
    };
  }

  const result = await fetchJSON<AuditModulesData>('/data/audit-modules.json');
  
  if (result.error || !result.data) {
    return {
      data: null,
      error: result.error || 'No audit data available',
      isLoading: false,
    };
  }
  
  const brandModules = result.data[brandId];
  
  if (!brandModules || !Array.isArray(brandModules)) {
    return {
      data: null,
      error: `No audit modules found for brand: ${brandId}`,
      isLoading: false,
    };
  }

  if (brandModules.length === 0) {
    return {
      data: [],
      error: null,
      isLoading: false,
    };
  }

  // Validate module structure
  const isValid = brandModules.every(
    (module) => module && typeof module.id === 'string' && typeof module.name === 'string'
  );

  if (!isValid) {
    return {
      data: null,
      error: 'Invalid audit module data structure',
      isLoading: false,
    };
  }
  
  return {
    data: brandModules,
    error: null,
    isLoading: false,
  };
}

/**
 * Get safe default score
 */
export function getDefaultScore(): {
  value: number;
  maxValue: number;
  trend: 'stable';
  changePercentage: number;
} {
  return {
    value: 0,
    maxValue: 100,
    trend: 'stable',
    changePercentage: 0,
  };
}

/**
 * Get safe default metrics
 */
export function getDefaultMetrics(): DashboardMetrics {
  return {
    aiVisibilityScore: getDefaultScore(),
    trustScore: getDefaultScore(),
    keywordCoverage: getDefaultScore(),
    lastAuditTimestamp: new Date().toISOString(),
  };
}
