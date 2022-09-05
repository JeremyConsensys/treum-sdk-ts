/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';

export interface PaginatedResult {
  cursor?: string;
  hasMore: boolean;
  results: unknown[];
  totalResults: number;
}

export const paginatedResultSchema: Schema<PaginatedResult> = object({
  cursor: ['cursor', optional(string())],
  hasMore: ['has_more', boolean()],
  results: ['results', array(unknown())],
  totalResults: ['total_results', number()],
});