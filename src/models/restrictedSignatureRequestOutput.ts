/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  dict,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';

export interface RestrictedSignatureRequestOutput {
  method: string;
  networkId: number;
  parameters?: Record<string, unknown> | null;
  /** ChecksumAddress */
  sender: string;
  /** ChecksumAddress */
  to: string;
  value?: number;
}

export const restrictedSignatureRequestOutputSchema: Schema<RestrictedSignatureRequestOutput> = object(
  {
    method: ['method', string()],
    networkId: ['network_id', number()],
    parameters: ['parameters', nullable(dict(unknown()))],
    sender: ['sender', string()],
    to: ['to', string()],
    value: ['value', optional(number())],
  }
);
