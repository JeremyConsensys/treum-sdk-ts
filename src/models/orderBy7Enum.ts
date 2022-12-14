/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderBy7Enum
 */
export enum OrderBy7Enum {
  CreatedAt = 'created_at',
  Expiration = 'expiration',
  ClaimedAt = 'claimed_at',
}

/**
 * Schema for OrderBy7Enum
 */
export const orderBy7EnumSchema: Schema<OrderBy7Enum> = stringEnum(OrderBy7Enum);
