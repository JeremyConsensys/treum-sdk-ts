/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TemplateTypeEnum
 */
export enum TemplateTypeEnum {
  USERINVITE = 'USER_INVITE',
  FORGOTPASSWORDRESET = 'FORGOT_PASSWORD_RESET',
  REDEEMNFT = 'REDEEM_NFT',
  CLAIMPINCODE = 'CLAIM_PINCODE',
  CLAIMEDNFT = 'CLAIMED_NFT',
  USERTEST = 'USER_TEST',
}

/**
 * Schema for TemplateTypeEnum
 */
export const templateTypeEnumSchema: Schema<TemplateTypeEnum> = stringEnum(TemplateTypeEnum);