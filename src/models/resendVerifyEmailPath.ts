/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ResendVerifyEmailPath {
  userId: string;
}

export const resendVerifyEmailPathSchema: Schema<ResendVerifyEmailPath> = object(
  { userId: ['user_id', string()] }
);