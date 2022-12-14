/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface PublicGetCollectionStatsPath {
  collectionId: string;
}

export const publicGetCollectionStatsPathSchema: Schema<PublicGetCollectionStatsPath> = object(
  { collectionId: ['collection_id', string()] }
);
