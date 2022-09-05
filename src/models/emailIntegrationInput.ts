/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, nullable, object, Schema, unknown } from '../schema';
import { Provider1Enum, provider1EnumSchema } from './provider1Enum';

export interface EmailIntegrationInput {
  config?: Record<string, unknown> | null;
  provider: Provider1Enum;
}

export const emailIntegrationInputSchema: Schema<EmailIntegrationInput> = object(
  {
    config: ['config', nullable(dict(unknown()))],
    provider: ['provider', provider1EnumSchema],
  }
);
