/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ProductPath {
  productId: string;
}

export const productPathSchema: Schema<ProductPath> = object({
  productId: ['product_id', string()],
});
