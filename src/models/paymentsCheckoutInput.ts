/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface PaymentsCheckoutInput {
  /** SafeString */
  email?: string;
  /** ChecksumAddress */
  ethAddress?: string;
  listingId: string;
  quantity: number;
}

export const paymentsCheckoutInputSchema: Schema<PaymentsCheckoutInput> = object(
  {
    email: ['email', optional(string())],
    ethAddress: ['eth_address', optional(string())],
    listingId: ['listing_id', string()],
    quantity: ['quantity', number()],
  }
);
