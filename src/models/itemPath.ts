/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ItemPath {
  itemId: string;
}

export const itemPathSchema: Schema<ItemPath> = object({
  itemId: ['item_id', string()],
});
