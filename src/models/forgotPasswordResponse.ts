/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ForgotPasswordResponse {
  status: string;
}

export const forgotPasswordResponseSchema: Schema<ForgotPasswordResponse> = object(
  { status: ['status', string()] }
);