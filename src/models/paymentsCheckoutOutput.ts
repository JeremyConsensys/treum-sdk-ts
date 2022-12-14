/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';
import { ModeEnum, modeEnumSchema } from './modeEnum';

export interface PaymentsCheckoutOutput {
  accountId: string;
  clientSecret: string;
  expiresAt: string;
  mode: ModeEnum;
  publishableKey: string;
  sessionId: string;
}

export const paymentsCheckoutOutputSchema: Schema<PaymentsCheckoutOutput> = object(
  {
    accountId: ['account_id', string()],
    clientSecret: ['client_secret', string()],
    expiresAt: ['expires_at', string()],
    mode: ['mode', modeEnumSchema],
    publishableKey: ['publishable_key', string()],
    sessionId: ['session_id', string()],
  }
);
