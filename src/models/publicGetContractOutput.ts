/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface PublicGetContractOutput {
  address: string;
  name: string;
  networkId: number;
}

export const publicGetContractOutputSchema: Schema<PublicGetContractOutput> = object(
  {
    address: ['address', string()],
    name: ['name', string()],
    networkId: ['network_id', number()],
  }
);
