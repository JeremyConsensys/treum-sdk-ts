/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderBy1Enum
 */
export enum OrderBy1Enum {
  UpdatedAt = 'updated_at',
}

/**
 * Schema for OrderBy1Enum
 */
export const orderBy1EnumSchema: Schema<OrderBy1Enum> = stringEnum(OrderBy1Enum);