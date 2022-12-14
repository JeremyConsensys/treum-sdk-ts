/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderBy4Enum
 */
export enum OrderBy4Enum {
  CreatedAt = 'created_at',
}

/**
 * Schema for OrderBy4Enum
 */
export const orderBy4EnumSchema: Schema<OrderBy4Enum> = stringEnum(OrderBy4Enum);
