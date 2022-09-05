/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface CancelPaymentIntentPath {
  /** SafeString */
  paymentIntentId: string;
}

export const cancelPaymentIntentPathSchema: Schema<CancelPaymentIntentPath> = object(
  { paymentIntentId: ['payment_intent_id', string()] }
);
