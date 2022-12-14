/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, lazy, object, Schema, string } from '../schema';
import { FixedUsage, fixedUsageSchema } from './fixedUsage';
import { MonthlyUsage, monthlyUsageSchema } from './monthlyUsage';

export interface Usage {
  fixedUsage: Record<string, FixedUsage>;
  monthlyUsage: Record<string, MonthlyUsage>;
  monthlyUsageRenewalAt: string;
  monthlyUsageStartedAt: string;
}

export const usageSchema: Schema<Usage> = object({
  fixedUsage: ['fixed_usage', dict(lazy(() => fixedUsageSchema))],
  monthlyUsage: ['monthly_usage', dict(lazy(() => monthlyUsageSchema))],
  monthlyUsageRenewalAt: ['monthly_usage_renewal_at', string()],
  monthlyUsageStartedAt: ['monthly_usage_started_at', string()],
});
