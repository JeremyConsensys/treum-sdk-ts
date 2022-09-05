/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface EmailClaimPath {
  claimId: string;
}

export const emailClaimPathSchema: Schema<EmailClaimPath> = object({
  claimId: ['claim_id', string()],
});