/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema } from '../schema';
import { Type11Enum, type11EnumSchema } from './type11Enum';

export interface StripeConnectOutput {
  types: Type11Enum[];
}

export const stripeConnectOutputSchema: Schema<StripeConnectOutput> = object({
  types: ['types', array(type11EnumSchema)],
});