/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface TokenPath {
  /** HexBytes */
  contractAddress: string;
  /** Uint */
  networkId: number;
  /** Uint */
  tokenId: number;
}

export const tokenPathSchema: Schema<TokenPath> = object({
  contractAddress: ['contract_address', string()],
  networkId: ['network_id', number()],
  tokenId: ['token_id', number()],
});