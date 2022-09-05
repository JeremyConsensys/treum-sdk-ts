/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface CreateOrganizationInput {
  autoFund?: boolean;
  /** SafeString */
  domain?: string;
  fundingWalletId?: string;
  hardwareWallet?: boolean;
  mfaRequired?: boolean;
  /** SafeString */
  name: string;
  platformSaleFee?: number;
}

export const createOrganizationInputSchema: Schema<CreateOrganizationInput> = object(
  {
    autoFund: ['auto_fund', optional(boolean())],
    domain: ['domain', optional(string())],
    fundingWalletId: ['funding_wallet_id', optional(string())],
    hardwareWallet: ['hardware_wallet', optional(boolean())],
    mfaRequired: ['mfa_required', optional(boolean())],
    name: ['name', string()],
    platformSaleFee: ['platform_sale_fee', optional(number())],
  }
);