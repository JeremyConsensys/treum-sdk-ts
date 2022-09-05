/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

export interface NetworkPath {
  /** Uint */
  networkId: number;
}

export const networkPathSchema: Schema<NetworkPath> = object({
  networkId: ['network_id', number()],
});
