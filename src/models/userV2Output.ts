/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Organization, organizationSchema } from './organization';

export interface UserV2Output {
  active: boolean;
  email: string;
  id: string;
  isManagedAccount: boolean;
  lastLogin?: string;
  lastSeen?: string;
  organization?: Organization;
  organizationId: string;
  permissions: string[];
  /** ChecksumAddress */
  publicKey: string;
  roleId: string;
}

export const userV2OutputSchema: Schema<UserV2Output> = object({
  active: ['active', boolean()],
  email: ['email', string()],
  id: ['id', string()],
  isManagedAccount: ['is_managed_account', boolean()],
  lastLogin: ['last_login', optional(string())],
  lastSeen: ['last_seen', optional(string())],
  organization: ['organization', optional(lazy(() => organizationSchema))],
  organizationId: ['organization_id', string()],
  permissions: ['permissions', array(string())],
  publicKey: ['public_key', string()],
  roleId: ['role_id', string()],
});
