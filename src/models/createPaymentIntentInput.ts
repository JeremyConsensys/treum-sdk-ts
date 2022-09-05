/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, Schema, string } from '../schema';
import { Buyer, buyerSchema } from './buyer';
import { ProviderEnum, providerEnumSchema } from './providerEnum';

export interface CreatePaymentIntentInput {
  buyer: Buyer;
  listingId: string;
  provider: ProviderEnum;
  quantity: number;
}

export const createPaymentIntentInputSchema: Schema<CreatePaymentIntentInput> = object(
  {
    buyer: ['buyer', lazy(() => buyerSchema)],
    listingId: ['listing_id', string()],
    provider: ['provider', providerEnumSchema],
    quantity: ['quantity', number()],
  }
);
