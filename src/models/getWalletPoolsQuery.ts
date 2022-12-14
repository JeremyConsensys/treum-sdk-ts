/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';
import { OrderBy2Enum, orderBy2EnumSchema } from './orderBy2Enum';
import {
  OrderDirection1Enum,
  orderDirection1EnumSchema,
} from './orderDirection1Enum';

export interface GetWalletPoolsQuery {
  /** SafeString */
  cursor?: string;
  /** Uint */
  limit?: number;
  orderBy?: OrderBy2Enum | null;
  orderDirection?: OrderDirection1Enum | null;
  organizationId?: string;
}

export const getWalletPoolsQuerySchema: Schema<GetWalletPoolsQuery> = object({
  cursor: ['cursor', optional(string())],
  limit: ['limit', optional(number())],
  orderBy: ['order_by', optional(nullable(orderBy2EnumSchema))],
  orderDirection: [
    'order_direction',
    optional(nullable(orderDirection1EnumSchema)),
  ],
  organizationId: ['organization_id', optional(string())],
});
