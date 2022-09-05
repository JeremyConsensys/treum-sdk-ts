/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ChangePasswordInput {
  /** SafeString */
  newPassword: string;
  /** SafeString */
  oldPassword: string;
}

export const changePasswordInputSchema: Schema<ChangePasswordInput> = object({
  newPassword: ['new_password', string()],
  oldPassword: ['old_password', string()],
});