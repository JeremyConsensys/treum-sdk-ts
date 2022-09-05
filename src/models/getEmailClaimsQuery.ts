/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { OrderByEnum, orderByEnumSchema } from './orderByEnum';
import {
  OrderDirection1Enum,
  orderDirection1EnumSchema,
} from './orderDirection1Enum';

export interface GetEmailClaimsQuery {
  active?: boolean;
  claimed?: boolean;
  collectionId: string[];
  /** SafeString */
  cursor?: string;
  /** SafeString */
  email?: string;
  itemId: string[];
  /** Uint */
  limit?: number;
  orderBy?: OrderByEnum | null;
  orderDirection?: OrderDirection1Enum | null;
  tokenId: string[];
}

export const getEmailClaimsQuerySchema: Schema<GetEmailClaimsQuery> = object({
  active: ['active', optional(boolean())],
  claimed: ['claimed', optional(boolean())],
  collectionId: ['collection_id', array(string())],
  cursor: ['cursor', optional(string())],
  email: ['email', optional(string())],
  itemId: ['item_id', array(string())],
  limit: ['limit', optional(number())],
  orderBy: ['order_by', optional(nullable(orderByEnumSchema))],
  orderDirection: [
    'order_direction',
    optional(nullable(orderDirection1EnumSchema)),
  ],
  tokenId: ['token_id', array(string())],
});
