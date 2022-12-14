/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface CreateBulkItemApiOutput {
  itemIds: string[];
}

export const createBulkItemApiOutputSchema: Schema<CreateBulkItemApiOutput> = object(
  { itemIds: ['item_ids', array(string())] }
);
