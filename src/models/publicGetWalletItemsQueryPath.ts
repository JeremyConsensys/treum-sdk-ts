/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface PublicGetWalletItemsQueryPath {
  /** ChecksumAddress */
  ethAddress: string;
  orgId: string;
}

export const publicGetWalletItemsQueryPathSchema: Schema<PublicGetWalletItemsQueryPath> = object(
  { ethAddress: ['eth_address', string()], orgId: ['org_id', string()] }
);
