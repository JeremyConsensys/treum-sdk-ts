/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  dict,
  nullable,
  number,
  object,
  Schema,
  string,
  unknown,
} from '../schema';
import { Type6Enum, type6EnumSchema } from './type6Enum';

export interface History {
  data?: Record<string, unknown> | null;
  quantity: number;
  timestamp: string;
  type: Type6Enum;
}

export const historySchema: Schema<History> = object({
  data: ['data', nullable(dict(unknown()))],
  quantity: ['quantity', number()],
  timestamp: ['timestamp', string()],
  type: ['type', type6EnumSchema],
});
