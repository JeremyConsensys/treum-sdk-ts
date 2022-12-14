/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface UpdateCoinbaseCommercePath {
  integrationId: string;
}

export const updateCoinbaseCommercePathSchema: Schema<UpdateCoinbaseCommercePath> = object(
  { integrationId: ['integration_id', string()] }
);
