/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CapabilityEnum
 */
export enum CapabilityEnum {
  ERC20 = 'ERC20',
  ERC20METADATA = 'ERC20_METADATA',
  ERC721 = 'ERC721',
  ERC721METADATA = 'ERC721_METADATA',
  BURNTOKEN = 'BURN_TOKEN',
  MINTTOADDRESS = 'MINT_TO_ADDRESS',
  ISMINTER = 'IS_MINTER',
  ERC1155 = 'ERC1155',
  ERC1155METADATAURI = 'ERC1155_METADATA_URI',
  WITHDRAWTOKENSTO = 'WITHDRAW_TOKENS_TO',
  TOKENMINTPRICES = 'TOKEN_MINT_PRICES',
  MINTMULTIPLETO = 'MINT_MULTIPLE_TO',
  AUCTIONV1 = 'AUCTION_V1',
  RESTRICTEDAUCTIONV1 = 'RESTRICTED_AUCTION_V1',
  EXCHANGEV1 = 'EXCHANGE_V1',
  OZACCESSCONTROL = 'OZ_ACCESS_CONTROL',
  OZOWNABLE = 'OZ_OWNABLE',
  MANAGESUPPLY = 'MANAGE_SUPPLY',
  SETBASEURI = 'SET_BASE_URI',
  CREATEWALLETPOOLPROXY = 'CREATE_WALLETPOOL_PROXY',
  PROXYEXECUTE = 'PROXY_EXECUTE',
  MINTVOUCHER = 'MINT_VOUCHER',
  GRANTREVOKEMANY = 'GRANT_REVOKE_MANY',
  ERC2981 = 'ERC2981',
  EIP165 = 'EIP165',
  CONTRACTROYALTY = 'CONTRACT_ROYALTY',
  PERTOKENROYALTY = 'PER_TOKEN_ROYALTY',
  CONTRACTNAMESYMBOL = 'CONTRACT_NAME_SYMBOL',
  CREATEFORADMINMINT = 'CREATE_FOR_ADMIN_MINT',
  ADMINMINTSINGLE = 'ADMIN_MINT_SINGLE',
  ADMINMINTMULTIPLE = 'ADMIN_MINT_MULTIPLE',
  ADMINMINTSINGLEURI = 'ADMIN_MINT_SINGLE_URI',
  DEPRECATEDMINTTOADDRESSWITHTOKENURI = 'DEPRECATED_MINT_TO_ADDRESS_WITH_TOKEN_URI',
  DEPRECATEDADMINMINT = 'DEPRECATED_ADMIN_MINT',
}

/**
 * Schema for CapabilityEnum
 */
export const capabilityEnumSchema: Schema<CapabilityEnum> = stringEnum(CapabilityEnum);