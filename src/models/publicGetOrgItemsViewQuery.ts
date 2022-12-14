/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { OrderBy6Enum, orderBy6EnumSchema } from './orderBy6Enum';
import {
  OrderDirection1Enum,
  orderDirection1EnumSchema,
} from './orderDirection1Enum';

export interface PublicGetOrgItemsViewQuery {
  attribute: string[];
  collectionId: string[];
  /** SafeString */
  cursor?: string;
  /** Uint */
  limit?: number;
  networkId: number[];
  orderBy?: OrderBy6Enum | null;
  orderDirection?: OrderDirection1Enum | null;
}

export const publicGetOrgItemsViewQuerySchema: Schema<PublicGetOrgItemsViewQuery> = object(
  {
    attribute: ['attribute', array(string())],
    collectionId: ['collection_id', array(string())],
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
    networkId: ['network_id', array(number())],
    orderBy: ['order_by', optional(nullable(orderBy6EnumSchema))],
    orderDirection: [
      'order_direction',
      optional(nullable(orderDirection1EnumSchema)),
    ],
  }
);
