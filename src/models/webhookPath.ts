/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface WebhookPath {
  webhookId: string;
}

export const webhookPathSchema: Schema<WebhookPath> = object({
  webhookId: ['webhook_id', string()],
});
