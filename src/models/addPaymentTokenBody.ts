/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface AddPaymentTokenBody {
  /** ChecksumAddress */
  address: string;
  /** Uint */
  networkId: number;
}

export const addPaymentTokenBodySchema: Schema<AddPaymentTokenBody> = object({
  address: ['address', string()],
  networkId: ['network_id', number()],
});
