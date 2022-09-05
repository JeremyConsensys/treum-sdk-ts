/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import {
  PublicCollectionOutput,
  publicCollectionOutputSchema,
} from './publicCollectionOutput';
import { Usage, usageSchema } from './usage';

export interface GetPlanSubscriptionOutput {
  plan: PublicCollectionOutput;
  startDate: string;
  usage: Usage;
}

export const getPlanSubscriptionOutputSchema: Schema<GetPlanSubscriptionOutput> = object(
  {
    plan: ['plan', lazy(() => publicCollectionOutputSchema)],
    startDate: ['start_date', string()],
    usage: ['usage', lazy(() => usageSchema)],
  }
);
