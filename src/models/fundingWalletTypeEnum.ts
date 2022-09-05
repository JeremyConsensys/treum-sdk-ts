/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for FundingWalletTypeEnum
 */
export enum FundingWalletTypeEnum {
  PLATFORMWALLET = 'PLATFORM_WALLET',
  ORGANIZATIONWALLET = 'ORGANIZATION_WALLET',
}

/**
 * Schema for FundingWalletTypeEnum
 */
export const fundingWalletTypeEnumSchema: Schema<FundingWalletTypeEnum> = stringEnum(FundingWalletTypeEnum);