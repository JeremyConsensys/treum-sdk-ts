/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema } from '../schema';

export interface UpdateOrganizationPlatformStripeAccountData {
  enabled: boolean;
}

export const updateOrganizationPlatformStripeAccountDataSchema: Schema<UpdateOrganizationPlatformStripeAccountData> = object(
  { enabled: ['enabled', boolean()] }
);
