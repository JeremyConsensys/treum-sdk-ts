/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface PublicRedeemClaimBody {
  /** ChecksumAddress */
  address: string;
  /** SafeString */
  pin: string;
}

export const publicRedeemClaimBodySchema: Schema<PublicRedeemClaimBody> = object(
  { address: ['address', string()], pin: ['pin', string()] }
);
