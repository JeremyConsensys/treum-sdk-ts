/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  dict,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { RoyaltyInfo, royaltyInfoSchema } from './royaltyInfo';
import {
  TokenAssignmentStrategyEnum,
  tokenAssignmentStrategyEnumSchema,
} from './tokenAssignmentStrategyEnum';
import { TokenContract, tokenContractSchema } from './tokenContract';
import { WalletPoolOutput, walletPoolOutputSchema } from './walletPoolOutput';

export interface ProductResponse {
  canCreateItems: boolean;
  code?: string;
  createdAt: string;
  defaultItemTypeId?: string;
  id: string;
  imageUrl?: string;
  isPublic: boolean;
  locked: boolean;
  metaData?: Record<string, unknown> | null;
  name: string;
  organizationId: string;
  royaltyInfo?: RoyaltyInfo;
  tags?: string[];
  tokenAssignmentStrategy?: TokenAssignmentStrategyEnum | null;
  tokenContract?: TokenContract;
  updatedAt: string;
  walletpool?: WalletPoolOutput;
}

export const productResponseSchema: Schema<ProductResponse> = object({
  canCreateItems: ['can_create_items', boolean()],
  code: ['code', optional(string())],
  createdAt: ['created_at', string()],
  defaultItemTypeId: ['default_item_type_id', optional(string())],
  id: ['id', string()],
  imageUrl: ['image_url', optional(string())],
  isPublic: ['is_public', boolean()],
  locked: ['locked', boolean()],
  metaData: ['meta_data', optional(nullable(dict(unknown())))],
  name: ['name', string()],
  organizationId: ['organization_id', string()],
  royaltyInfo: ['royalty_info', optional(lazy(() => royaltyInfoSchema))],
  tags: ['tags', optional(array(string()))],
  tokenAssignmentStrategy: [
    'token_assignment_strategy',
    optional(nullable(tokenAssignmentStrategyEnumSchema)),
  ],
  tokenContract: ['token_contract', optional(lazy(() => tokenContractSchema))],
  updatedAt: ['updated_at', string()],
  walletpool: ['walletpool', optional(lazy(() => walletPoolOutputSchema))],
});
