/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  dict,
  nullable,
  number,
  object,
  Schema,
  string,
  unknown,
} from '../schema';
import {
  OnChainStatusEnum,
  onChainStatusEnumSchema,
} from './onChainStatusEnum';
import { StateEnum, stateEnumSchema } from './stateEnum';
import { TxTypeEnum, txTypeEnumSchema } from './txTypeEnum';

export interface TransactionOutput {
  createdAt: string;
  data?: Record<string, unknown> | null;
  failureCount: number;
  id: string;
  networkId: number;
  nonce: number;
  onChainStatus: OnChainStatusEnum;
  signer: string;
  state: StateEnum;
  txHash: string;
  txType: TxTypeEnum;
}

export const transactionOutputSchema: Schema<TransactionOutput> = object({
  createdAt: ['created_at', string()],
  data: ['data', nullable(dict(unknown()))],
  failureCount: ['failure_count', number()],
  id: ['id', string()],
  networkId: ['network_id', number()],
  nonce: ['nonce', number()],
  onChainStatus: ['on_chain_status', onChainStatusEnumSchema],
  signer: ['signer', string()],
  state: ['state', stateEnumSchema],
  txHash: ['tx_hash', string()],
  txType: ['tx_type', txTypeEnumSchema],
});