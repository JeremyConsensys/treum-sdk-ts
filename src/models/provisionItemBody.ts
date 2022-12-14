/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, nullable, object, Schema, string, unknown } from '../schema';

export interface ProvisionItemBody {
  /** SafeString */
  action: string;
  parameters?: Record<string, unknown> | null;
}

export const provisionItemBodySchema: Schema<ProvisionItemBody> = object({
  action: ['action', string()],
  parameters: ['parameters', nullable(dict(unknown()))],
});
