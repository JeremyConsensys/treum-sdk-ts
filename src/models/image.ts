/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Image {
  cid?: string;
  full?: string;
  original?: string;
  thumb?: string;
  tiny?: string;
}

export const imageSchema: Schema<Image> = object({
  cid: ['cid', optional(string())],
  full: ['full', optional(string())],
  original: ['original', optional(string())],
  thumb: ['thumb', optional(string())],
  tiny: ['tiny', optional(string())],
});
