/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, unknown } from '../schema';

export interface CollectionAbiOutput {
  abi: unknown[];
}

export const collectionAbiOutputSchema: Schema<CollectionAbiOutput> = object({
  abi: ['abi', array(unknown())],
});