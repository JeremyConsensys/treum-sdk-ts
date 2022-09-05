/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Image, imageSchema } from './image';

export interface Media {
  image?: Image;
}

export const mediaSchema: Schema<Media> = object({
  image: ['image', optional(lazy(() => imageSchema))],
});