/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface PublicGetOrganizationsByEmailPath {
  /** SafeString */
  email: string;
}

export const publicGetOrganizationsByEmailPathSchema: Schema<PublicGetOrganizationsByEmailPath> = object(
  { email: ['email', string()] }
);
