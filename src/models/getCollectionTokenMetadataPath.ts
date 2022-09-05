/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface GetCollectionTokenMetadataPath {
  collectionId: string;
  tokenId: number;
}

export const getCollectionTokenMetadataPathSchema: Schema<GetCollectionTokenMetadataPath> = object(
  { collectionId: ['collection_id', string()], tokenId: ['token_id', number()] }
);