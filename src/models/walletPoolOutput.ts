/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  OrganizationWallet,
  organizationWalletSchema,
} from './organizationWallet';
import {
  PublicGetContractOutput,
  publicGetContractOutputSchema,
} from './publicGetContractOutput';

export interface WalletPoolOutput {
  contract?: PublicGetContractOutput;
  contractPendingTxId?: string;
  id: string;
  name: string;
  networkId: number;
  organizationId: string;
  poolSize: number;
  wallets: OrganizationWallet[];
}

export const walletPoolOutputSchema: Schema<WalletPoolOutput> = object({
  contract: ['contract', optional(lazy(() => publicGetContractOutputSchema))],
  contractPendingTxId: ['contract_pending_tx_id', optional(string())],
  id: ['id', string()],
  name: ['name', string()],
  networkId: ['network_id', number()],
  organizationId: ['organization_id', string()],
  poolSize: ['pool_size', number()],
  wallets: ['wallets', array(lazy(() => organizationWalletSchema))],
});
