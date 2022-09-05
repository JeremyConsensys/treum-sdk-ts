/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, nullable, object, Schema, string, unknown } from '../schema';
import { Provider1Enum, provider1EnumSchema } from './provider1Enum';

export interface EmailIntegrationOutput {
  config?: Record<string, unknown> | null;
  id: string;
  provider: Provider1Enum;
}

export const emailIntegrationOutputSchema: Schema<EmailIntegrationOutput> = object(
  {
    config: ['config', nullable(dict(unknown()))],
    id: ['id', string()],
    provider: ['provider', provider1EnumSchema],
  }
);