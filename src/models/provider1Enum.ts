/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Provider1Enum
 */
export enum Provider1Enum {
  MAILGUN = 'MAILGUN',
  AMAZONSES = 'AMAZON_SES',
  SENDGRID = 'SENDGRID',
  CUSTOMSMTP = 'CUSTOM_SMTP',
}

/**
 * Schema for Provider1Enum
 */
export const provider1EnumSchema: Schema<Provider1Enum> = stringEnum(Provider1Enum);
