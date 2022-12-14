/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { SaleOutput, saleOutputSchema } from './saleOutput';

export interface SalesPaginatedResult {
  cursor?: string;
  hasMore: boolean;
  results: SaleOutput[];
  totalResults: number;
}

export const salesPaginatedResultSchema: Schema<SalesPaginatedResult> = object({
  cursor: ['cursor', optional(string())],
  hasMore: ['has_more', boolean()],
  results: ['results', array(lazy(() => saleOutputSchema))],
  totalResults: ['total_results', number()],
});
