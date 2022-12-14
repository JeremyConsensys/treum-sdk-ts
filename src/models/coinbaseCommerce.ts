/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema, string } from '../schema';

export interface CoinbaseCommerce {
  integrationId: string;
  setupComplete: boolean;
  webhookUrl: string;
}

export const coinbaseCommerceSchema: Schema<CoinbaseCommerce> = object({
  integrationId: ['integration_id', string()],
  setupComplete: ['setup_complete', boolean()],
  webhookUrl: ['webhook_url', string()],
});
