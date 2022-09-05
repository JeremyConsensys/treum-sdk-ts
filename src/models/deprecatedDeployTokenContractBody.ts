/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import {
  TokenAssignmentStrategyEnum,
  tokenAssignmentStrategyEnumSchema,
} from './tokenAssignmentStrategyEnum';

export interface DeprecatedDeployTokenContractBody {
  /** SafeString */
  contract?: string;
  defaultItemTypeId?: string;
  /** Uint */
  networkId?: number;
  /** SafeString */
  symbol: string;
  tokenAssignmentStrategy?: TokenAssignmentStrategyEnum;
}

export const deprecatedDeployTokenContractBodySchema: Schema<DeprecatedDeployTokenContractBody> = object(
  {
    contract: ['contract', optional(string())],
    defaultItemTypeId: ['default_item_type_id', optional(string())],
    networkId: ['network_id', optional(number())],
    symbol: ['symbol', string()],
    tokenAssignmentStrategy: [
      'token_assignment_strategy',
      optional(tokenAssignmentStrategyEnumSchema),
    ],
  }
);