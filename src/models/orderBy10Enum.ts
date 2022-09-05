/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderBy10Enum
 */
export enum OrderBy10Enum {
  Age = 'age',
}

/**
 * Schema for OrderBy10Enum
 */
export const orderBy10EnumSchema: Schema<OrderBy10Enum> = stringEnum(OrderBy10Enum);