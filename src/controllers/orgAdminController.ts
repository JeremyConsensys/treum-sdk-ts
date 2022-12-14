/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CoinbaseCommerceIntegrationInput,
  coinbaseCommerceIntegrationInputSchema,
} from '../models/coinbaseCommerceIntegrationInput';
import {
  CreateItemTypeEndpointBody,
  createItemTypeEndpointBodySchema,
} from '../models/createItemTypeEndpointBody';
import {
  CreateOrganizationEmailTemplateBody,
  createOrganizationEmailTemplateBodySchema,
} from '../models/createOrganizationEmailTemplateBody';
import {
  CreateOrganizationEmailTemplateTestMailBody,
  createOrganizationEmailTemplateTestMailBodySchema,
} from '../models/createOrganizationEmailTemplateTestMailBody';
import {
  CreateOrgWalletInput,
  createOrgWalletInputSchema,
} from '../models/createOrgWalletInput';
import {
  CreateUserInput,
  createUserInputSchema,
} from '../models/createUserInput';
import {
  EditItemTypeEndpointBody,
  editItemTypeEndpointBodySchema,
} from '../models/editItemTypeEndpointBody';
import {
  EditOrganizationData,
  editOrganizationDataSchema,
} from '../models/editOrganizationData';
import {
  EditOrganizationEmailTemplateBody,
  editOrganizationEmailTemplateBodySchema,
} from '../models/editOrganizationEmailTemplateBody';
import { EditUserData, editUserDataSchema } from '../models/editUserData';
import {
  GetPlanSubscriptionOutput,
  getPlanSubscriptionOutputSchema,
} from '../models/getPlanSubscriptionOutput';
import { IncludeEnum, includeEnumSchema } from '../models/includeEnum';
import {
  ItemTypeDomainModel,
  itemTypeDomainModelSchema,
} from '../models/itemTypeDomainModel';
import {
  ItemTypeMetaSchema,
  itemTypeMetaSchemaSchema,
} from '../models/itemTypeMetaSchema';
import {
  ItemTypesPaginatedResult,
  itemTypesPaginatedResultSchema,
} from '../models/itemTypesPaginatedResult';
import { OrderBy9Enum, orderBy9EnumSchema } from '../models/orderBy9Enum';
import {
  OrderDirection9Enum,
  orderDirection9EnumSchema,
} from '../models/orderDirection9Enum';
import {
  OrganizationEmailTemplateDomainModel,
  organizationEmailTemplateDomainModelSchema,
} from '../models/organizationEmailTemplateDomainModel';
import {
  OrganizationEmailTemplateVariable,
  organizationEmailTemplateVariableSchema,
} from '../models/organizationEmailTemplateVariable';
import {
  OrganizationSchemaV2,
  organizationSchemaV2Schema,
} from '../models/organizationSchemaV2';
import {
  OrganizationWallet,
  organizationWalletSchema,
} from '../models/organizationWallet';
import {
  PaymentIntegrations,
  paymentIntegrationsSchema,
} from '../models/paymentIntegrations';
import { PlanOutput, planOutputSchema } from '../models/planOutput';
import {
  PublicPlatformStripeAccountOutput,
  publicPlatformStripeAccountOutputSchema,
} from '../models/publicPlatformStripeAccountOutput';
import {
  RestrictedSignatureRequestInput,
  restrictedSignatureRequestInputSchema,
} from '../models/restrictedSignatureRequestInput';
import {
  RestrictedSignatureRequestOutput,
  restrictedSignatureRequestOutputSchema,
} from '../models/restrictedSignatureRequestOutput';
import { RoleSchemaV2, roleSchemaV2Schema } from '../models/roleSchemaV2';
import {
  StripeConnectOutput,
  stripeConnectOutputSchema,
} from '../models/stripeConnectOutput';
import {
  StripeIntegrationOutput,
  stripeIntegrationOutputSchema,
} from '../models/stripeIntegrationOutput';
import {
  UpdateOrganizationPlatformStripeAccountData,
  updateOrganizationPlatformStripeAccountDataSchema,
} from '../models/updateOrganizationPlatformStripeAccountData';
import { UserV2Output, userV2OutputSchema } from '../models/userV2Output';
import { array, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class OrgAdminController extends BaseController {
  /**
   * Sign a bid
   * --
   * description: |
   * Organization admins will call this endpoint to sign a bidder's bid. Only signed bids are valid in
   * restricted auctions.
   *
   * @param body
   * @return Response from the API call
   */
  async signABidDescriptionOrganizationAdminsWillCallThisEndpointToSignABidderSBidOnlySignedBidsAreValidInRestrictedAuctions(
    body?: RestrictedSignatureRequestInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RestrictedSignatureRequestOutput>> {
    const req = this.createRequest(
      'POST',
      '/api/v2/contracts/signature-request'
    );
    const mapped = req.prepareArgs({
      body: [body, optional(restrictedSignatureRequestInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(
      restrictedSignatureRequestOutputSchema,
      requestOptions
    );
  }

  /**
   * Only organization or platform admins have access to this data.
   * If no organization ID is supplied, platform admins will get all item types.
   * If no organization ID is supplied, an org admin will get the item types of his organization.
   *
   * @param organizationId
   * @param cursor          SafeString
   * @param limit           Uint
   * @param orderBy
   * @param orderDirection
   * @return Response from the API call
   */
  async getsAllItemTypesForTheOrganizationOfASpecificOrganizationIDIfSuppliedOrTheCallingUser(
    organizationId?: string,
    cursor?: string,
    limit?: number,
    orderBy?: OrderBy9Enum,
    orderDirection?: OrderDirection9Enum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ItemTypesPaginatedResult>> {
    const req = this.createRequest('GET', '/api/v2/item-types');
    const mapped = req.prepareArgs({
      organizationId: [organizationId, optional(string())],
      cursor: [cursor, optional(string())],
      limit: [limit, optional(number())],
      orderBy: [orderBy, optional(orderBy9EnumSchema)],
      orderDirection: [orderDirection, optional(orderDirection9EnumSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.query('organization_id', mapped.organizationId);
    req.query('cursor', mapped.cursor);
    req.query('limit', mapped.limit);
    req.query('order_by', mapped.orderBy);
    req.query('order_direction', mapped.orderDirection);
    return req.callAsJson(itemTypesPaginatedResultSchema, requestOptions);
  }

  /**
   * If not supplied, the organization of the requesting user is used.
   *
   * @param body
   * @return Response from the API call
   */
  async createANewItemTypeForAnOrganization(
    body?: CreateItemTypeEndpointBody,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ItemTypeDomainModel>> {
    const req = this.createRequest('POST', '/api/v2/item-types');
    const mapped = req.prepareArgs({
      body: [body, optional(createItemTypeEndpointBodySchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(itemTypeDomainModelSchema, requestOptions);
  }

  /**
   * Only organization or platform admins have access to this data.
   *
   * @return Response from the API call
   */
  async getTheMetaSchemaExampleWhichIsUsedToValidateAnItemTypeSchema(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ItemTypeMetaSchema>> {
    const req = this.createRequest('GET', '/api/v2/item-types/meta-schema');
    req.header('Content-Type', 'application/json');
    return req.callAsJson(itemTypeMetaSchemaSchema, requestOptions);
  }

  /**
   * Only following item types can be deleted:
   * - Specific to your organization.
   * - Not associated with an item and/or collection.
   *
   * @param itemTypeId
   * @return Response from the API call
   */
  async deleteASpecificItemType(
    itemTypeId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ itemTypeId: [itemTypeId, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/item-types/${mapped.itemTypeId}`;
    return req.call(requestOptions);
  }

  /**
   * Get a specific item type for an organization.
   *
   * @param itemTypeId
   * @return Response from the API call
   */
  async getASpecificItemTypeForAnOrganization(
    itemTypeId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ItemTypeDomainModel>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ itemTypeId: [itemTypeId, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/item-types/${mapped.itemTypeId}`;
    return req.callAsJson(itemTypeDomainModelSchema, requestOptions);
  }

  /**
   * Edits an existing item type for an organization.
   *
   * @param itemTypeId
   * @param body
   * @return Response from the API call
   */
  async editsAnExistingItemTypeForAnOrganization(
    itemTypeId: string,
    body?: EditItemTypeEndpointBody,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ItemTypeDomainModel>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      itemTypeId: [itemTypeId, string()],
      body: [body, optional(editItemTypeEndpointBodySchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/item-types/${mapped.itemTypeId}`;
    return req.callAsJson(itemTypeDomainModelSchema, requestOptions);
  }

  /**
   * A template for each **customizable** template type will be retrieved for:
   *
   * * An organization, which is derived from the authorized user.
   *
   * Every template type with no custom template for the organization will return the platform default.
   *
   * @return Response from the API call
   */
  async getAllCustomizableEmailTemplates(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrganizationEmailTemplateDomainModel[]>> {
    const req = this.createRequest(
      'GET',
      '/api/v2/organization/email-templates'
    );
    req.header('Content-Type', 'application/json');
    return req.callAsJson(
      array(organizationEmailTemplateDomainModelSchema),
      requestOptions
    );
  }

  /**
   * Organization admins will only be able to customize templates that match these types.
   *
   * @return Response from the API call
   */
  async getAllCustomizableEmailTemplateTypes(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<string[]>> {
    const req = this.createRequest(
      'GET',
      '/api/v2/organization/email-templates/types'
    );
    req.header('Content-Type', 'application/json');
    return req.callAsJson(array(string()), requestOptions);
  }

  /**
   * The template that will be deleted will be identified by:
   *
   * * An organization, which is derived from the authorized user.
   * * A **customizable** template type, which is passed in via the URL path.
   *
   * After the delete, the platform default will be used by the organization.
   *
   * @param templateType
   * @return Response from the API call
   */
  async deleteASpecificEmailTemplate(
    templateType: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ templateType: [templateType, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/organization/email-templates/${mapped.templateType}`;
    return req.call(requestOptions);
  }

  /**
   * The template will be retrieved for:
   *
   * * An organization, which is derived from the authorized user.
   * * A **customizable** template type, which is passed in via the URL path.
   *
   * If no template was found, the platform default will be returned.
   *
   * @param templateType
   * @return Response from the API call
   */
  async getsASpecificCustomizableEmailTemplate(
    templateType: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrganizationEmailTemplateDomainModel>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ templateType: [templateType, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/organization/email-templates/${mapped.templateType}`;
    return req.callAsJson(
      organizationEmailTemplateDomainModelSchema,
      requestOptions
    );
  }

  /**
   * The template that will be updated will be identified by:
   *
   * * An organization, which is derived from the authorized user.
   * * A **customizable** template type, which is passed in via the URL path.
   *
   * @param templateType
   * @param body
   * @return Response from the API call
   */
  async updateASpecificEmailTemplate(
    templateType: string,
    body?: EditOrganizationEmailTemplateBody,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrganizationEmailTemplateDomainModel>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      templateType: [templateType, string()],
      body: [body, optional(editOrganizationEmailTemplateBodySchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/organization/email-templates/${mapped.templateType}`;
    return req.callAsJson(
      organizationEmailTemplateDomainModelSchema,
      requestOptions
    );
  }

  /**
   * The template type that is specified should be considered **customizable** by the platform.
   *
   * @param templateType
   * @param body
   * @return Response from the API call
   */
  async createANewEmailTemplate(
    templateType: string,
    body?: CreateOrganizationEmailTemplateBody,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrganizationEmailTemplateDomainModel>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      templateType: [templateType, string()],
      body: [body, optional(createOrganizationEmailTemplateBodySchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/organization/email-templates/${mapped.templateType}`;
    return req.callAsJson(
      organizationEmailTemplateDomainModelSchema,
      requestOptions
    );
  }

  /**
   * If no email variable is specified, the mail will be sent to the authorized user.
   * The template type that is specified should be considered **customizable** by the platform.
   *
   * @param templateType
   * @param body
   * @return Response from the API call
   */
  async createsAndSendsANewTestMail(
    templateType: string,
    body?: CreateOrganizationEmailTemplateTestMailBody,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      templateType: [templateType, string()],
      body: [body, optional(createOrganizationEmailTemplateTestMailBodySchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/organization/email-templates/${mapped.templateType}/send-test`;
    return req.call(requestOptions);
  }

  /**
   * Variables are derived from the platform default.
   *
   * Variables used in templates should be wrapped in double curly brackets.
   *
   * @param templateType
   * @return Response from the API call
   */
  async getAllVariablesForASpecificTemplate(
    templateType: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrganizationEmailTemplateVariable[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ templateType: [templateType, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/organization/email-templates/${mapped.templateType}/variables`;
    return req.callAsJson(
      array(organizationEmailTemplateVariableSchema),
      requestOptions
    );
  }

  /**
   * This will be a list of 1 for everyone except platform admins.
   *
   * @param include
   * @return Response from the API call
   */
  async getAllOrganizationsTheCurrentUserHasAccessTo(
    include?: IncludeEnum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrganizationSchemaV2[]>> {
    const req = this.createRequest('GET', '/api/v2/organizations');
    const mapped = req.prepareArgs({
      include: [include, optional(array(includeEnumSchema))],
    });
    req.header('Content-Type', 'application/json');
    req.query('include', mapped.include);
    return req.callAsJson(array(organizationSchemaV2Schema), requestOptions);
  }

  /**
   * The user must have access to the desired org.
   *
   * @param orgId
   * @return Response from the API call
   */
  async getOrganizationById(
    orgId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrganizationSchemaV2>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ orgId: [orgId, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/organizations/${mapped.orgId}`;
    return req.callAsJson(organizationSchemaV2Schema, requestOptions);
  }

  /**
   * Most fields are only editable by a platform admin.
   *
   * @param orgId
   * @param body
   * @return Response from the API call
   */
  async editAnOrganization(
    orgId: string,
    body?: EditOrganizationData,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrganizationSchemaV2>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      orgId: [orgId, string()],
      body: [body, optional(editOrganizationDataSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/organizations/${mapped.orgId}`;
    return req.callAsJson(organizationSchemaV2Schema, requestOptions);
  }

  /**
   * Get platform stripe accounts by org
   *
   * @param orgId
   * @return Response from the API call
   */
  async getPlatformStripeAccountsByOrg(
    orgId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PublicPlatformStripeAccountOutput[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ orgId: [orgId, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/organizations/${mapped.orgId}/payment-integrations/platform-stripe-accounts`;
    return req.callAsJson(
      array(publicPlatformStripeAccountOutputSchema),
      requestOptions
    );
  }

  /**
   * Associate or dissociate platform stripe accounts by organization
   *
   * @param orgId
   * @param platformStripeAccountId
   * @param body
   * @return Response from the API call
   */
  async associateOrDissociatePlatformStripeAccountsByOrganization(
    orgId: string,
    platformStripeAccountId: string,
    body?: UpdateOrganizationPlatformStripeAccountData,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PublicPlatformStripeAccountOutput[]>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      orgId: [orgId, string()],
      platformStripeAccountId: [platformStripeAccountId, string()],
      body: [body, optional(updateOrganizationPlatformStripeAccountDataSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/organizations/${mapped.orgId}/payment-integrations/platform-stripe-accounts/${mapped.platformStripeAccountId}`;
    return req.callAsJson(
      array(publicPlatformStripeAccountOutputSchema),
      requestOptions
    );
  }

  /**
   * Get the current plan
   *
   * @param orgId
   * @return Response from the API call
   */
  async getTheCurrentPlan(
    orgId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetPlanSubscriptionOutput>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ orgId: [orgId, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/organizations/${mapped.orgId}/plan-subscription`;
    return req.callAsJson(getPlanSubscriptionOutputSchema, requestOptions);
  }

  /**
   * Get all organization wallets
   *
   * @param orgId
   * @return Response from the API call
   */
  async getAllOrganizationWallets(
    orgId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrganizationWallet[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ orgId: [orgId, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/organizations/${mapped.orgId}/wallets`;
    return req.callAsJson(array(organizationWalletSchema), requestOptions);
  }

  /**
   * Create organization wallet
   *
   * @param orgId
   * @param body
   * @return Response from the API call
   */
  async createOrganizationWallet(
    orgId: string,
    body?: CreateOrgWalletInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrganizationWallet>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      orgId: [orgId, string()],
      body: [body, optional(createOrgWalletInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/organizations/${mapped.orgId}/wallets`;
    return req.callAsJson(organizationWalletSchema, requestOptions);
  }

  /**
   * Delete organization wallet
   *
   * @param orgId
   * @param walletId
   * @return Response from the API call
   */
  async deleteOrganizationWallet(
    orgId: string,
    walletId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      orgId: [orgId, string()],
      walletId: [walletId, string()],
    });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/organizations/${mapped.orgId}/wallets/${mapped.walletId}`;
    return req.call(requestOptions);
  }

  /**
   * Get integrated payment provider accounts
   *
   * @return Response from the API call
   */
  async getIntegratedPaymentProviderAccounts(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentIntegrations>> {
    const req = this.createRequest('GET', '/api/v2/payment-integrations');
    req.header('Content-Type', 'application/json');
    return req.callAsJson(paymentIntegrationsSchema, requestOptions);
  }

  /**
   * Disconnect the organization's coinbase commerce account
   *
   * @return Response from the API call
   */
  async disconnectTheOrganizationSCoinbaseCommerceAccount(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest(
      'DELETE',
      '/api/v2/payment-integrations/coinbase'
    );
    req.header('Content-Type', 'application/json');
    return req.call(requestOptions);
  }

  /**
   * Setup an organization's coinbase commerce account
   *
   * @param body
   * @return Response from the API call
   */
  async setupAnOrganizationSCoinbaseCommerceAccount(
    body?: CoinbaseCommerceIntegrationInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest(
      'POST',
      '/api/v2/payment-integrations/coinbase'
    );
    const mapped = req.prepareArgs({
      body: [body, optional(coinbaseCommerceIntegrationInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.call(requestOptions);
  }

  /**
   * Edit an organization's coinbase commerce account
   *
   * @param integrationId
   * @param body
   * @return Response from the API call
   */
  async editAnOrganizationSCoinbaseCommerceAccount(
    integrationId: string,
    body?: CoinbaseCommerceIntegrationInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      integrationId: [integrationId, string()],
      body: [body, optional(coinbaseCommerceIntegrationInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/payment-integrations/coinbase/${mapped.integrationId}`;
    return req.call(requestOptions);
  }

  /**
   * Returns all PlatformStripeAccounts for this organization
   *
   * @return Response from the API call
   */
  async returnsAllPlatformStripeAccountsForThisOrganization(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PublicPlatformStripeAccountOutput[]>> {
    const req = this.createRequest(
      'GET',
      '/api/v2/payment-integrations/enabled-platform-stripe-accounts'
    );
    req.header('Content-Type', 'application/json');
    return req.callAsJson(
      array(publicPlatformStripeAccountOutputSchema),
      requestOptions
    );
  }

  /**
   * Query the stripe integration for this org and update setup_complete accordingly if card_payments
   * enabled
   *
   * @return Response from the API call
   */
  async queryTheStripeIntegrationForThisOrgAndUpdateSetupCompleteAccordinglyIfCardPaymentsEnabled(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StripeIntegrationOutput>> {
    const req = this.createRequest(
      'POST',
      '/api/v2/payment-integrations/retry-stripe'
    );
    req.header('Content-Type', 'application/json');
    return req.callAsJson(stripeIntegrationOutputSchema, requestOptions);
  }

  /**
   * Get stripe connect types by organization
   *
   * @return Response from the API call
   */
  async getStripeConnectTypesByOrganization(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StripeConnectOutput>> {
    const req = this.createRequest(
      'GET',
      '/api/v2/payment-integrations/stripe-connect-types'
    );
    req.header('Content-Type', 'application/json');
    return req.callAsJson(stripeConnectOutputSchema, requestOptions);
  }

  /**
   * Get all plans
   *
   * @return Response from the API call
   */
  async getAllPlans(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PlanOutput[]>> {
    const req = this.createRequest('GET', '/api/v2/plans');
    req.header('Content-Type', 'application/json');
    return req.callAsJson(array(planOutputSchema), requestOptions);
  }

  /**
   * Get all available roles
   *
   * @return Response from the API call
   */
  async getAllAvailableRoles(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RoleSchemaV2[]>> {
    const req = this.createRequest('GET', '/api/v2/roles');
    req.header('Content-Type', 'application/json');
    return req.callAsJson(array(roleSchemaV2Schema), requestOptions);
  }

  /**
   * Get all users for the current organization
   *
   * @return Response from the API call
   */
  async getAllUsersForTheCurrentOrganization(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserV2Output[]>> {
    const req = this.createRequest('GET', '/api/v2/users');
    req.header('Content-Type', 'application/json');
    return req.callAsJson(array(userV2OutputSchema), requestOptions);
  }

  /**
   * Create a new user
   *
   * @param body
   * @return Response from the API call
   */
  async createANewUser(
    body?: CreateUserInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserV2Output>> {
    const req = this.createRequest('POST', '/api/v2/users');
    const mapped = req.prepareArgs({
      body: [body, optional(createUserInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(userV2OutputSchema, requestOptions);
  }

  /**
   * Delete user by id
   *
   * @param userId
   * @return Response from the API call
   */
  async deleteUserById(
    userId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ userId: [userId, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/users/${mapped.userId}`;
    return req.call(requestOptions);
  }

  /**
   * Get a user by id
   *
   * @param userId
   * @return Response from the API call
   */
  async getAUserById(
    userId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserV2Output>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ userId: [userId, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/users/${mapped.userId}`;
    return req.callAsJson(userV2OutputSchema, requestOptions);
  }

  /**
   * Edit a user
   *
   * @param userId
   * @param body
   * @return Response from the API call
   */
  async editAUser(
    userId: string,
    body?: EditUserData,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserV2Output>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      body: [body, optional(editUserDataSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/users/${mapped.userId}`;
    return req.callAsJson(userV2OutputSchema, requestOptions);
  }
}
