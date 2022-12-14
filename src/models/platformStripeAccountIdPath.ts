/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface PlatformStripeAccountIdPath {
  platformStripeAccountId: string;
}

export const platformStripeAccountIdPathSchema: Schema<PlatformStripeAccountIdPath> = object(
  { platformStripeAccountId: ['platform_stripe_account_id', string()] }
);
