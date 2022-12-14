/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface DeleteOrganizationWalletPath {
  orgId: string;
  walletId: string;
}

export const deleteOrganizationWalletPathSchema: Schema<DeleteOrganizationWalletPath> = object(
  { orgId: ['org_id', string()], walletId: ['wallet_id', string()] }
);
