/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { Fees, feesSchema } from './fees';
import {
  StripeConnectTypeEnum,
  stripeConnectTypeEnumSchema,
} from './stripeConnectTypeEnum';
import { UserV2Output, userV2OutputSchema } from './userV2Output';
import { Wallets, walletsSchema } from './wallets';

export interface OrganizationSchemaV2 {
  auth0Id?: string;
  domain?: string;
  fees?: Fees;
  id?: string;
  isEnabled?: boolean;
  metaData?: unknown;
  mfaRequired?: boolean;
  name?: string;
  networkIds?: number[];
  stripeConnectTypes?: StripeConnectTypeEnum[];
  users?: UserV2Output[];
  wallets?: Wallets;
}

export const organizationSchemaV2Schema: Schema<OrganizationSchemaV2> = object({
  auth0Id: ['auth0_id', optional(string())],
  domain: ['domain', optional(string())],
  fees: ['fees', optional(lazy(() => feesSchema))],
  id: ['id', optional(string())],
  isEnabled: ['is_enabled', optional(boolean())],
  metaData: ['meta_data', optional(unknown())],
  mfaRequired: ['mfa_required', optional(boolean())],
  name: ['name', optional(string())],
  networkIds: ['network_ids', optional(array(number()))],
  stripeConnectTypes: [
    'stripe_connect_types',
    optional(array(stripeConnectTypeEnumSchema)),
  ],
  users: ['users', optional(array(lazy(() => userV2OutputSchema)))],
  wallets: ['wallets', optional(lazy(() => walletsSchema))],
});
