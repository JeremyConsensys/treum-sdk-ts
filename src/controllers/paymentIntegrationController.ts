/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  EditPlatformStripeAccountData,
  editPlatformStripeAccountDataSchema,
} from '../models/editPlatformStripeAccountData';
import {
  PlatformStripeAccountInput,
  platformStripeAccountInputSchema,
} from '../models/platformStripeAccountInput';
import {
  PlatformStripeAccountOutput,
  platformStripeAccountOutputSchema,
} from '../models/platformStripeAccountOutput';
import {
  PlatformStripeAccountPaginatedResults,
  platformStripeAccountPaginatedResultsSchema,
} from '../models/platformStripeAccountPaginatedResults';
import {
  StripePaymentsSetupInput,
  stripePaymentsSetupInputSchema,
} from '../models/stripePaymentsSetupInput';
import {
  StripePaymentsSetupOutput,
  stripePaymentsSetupOutputSchema,
} from '../models/stripePaymentsSetupOutput';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class PaymentIntegrationController extends BaseController {
  /**
   * Create a platform stripe account
   *
   * @param body
   * @return Response from the API call
   */
  async createAPlatformStripeAccount(
    body?: PlatformStripeAccountInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PlatformStripeAccountOutput>> {
    const req = this.createRequest(
      'POST',
      '/api/v2/payment-integrations/platform-stripe-account'
    );
    const mapped = req.prepareArgs({
      body: [body, optional(platformStripeAccountInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(platformStripeAccountOutputSchema, requestOptions);
  }

  /**
   * Delete a platform stripe account by id
   *
   * @param platformStripeAccountId
   * @return Response from the API call
   */
  async deleteAPlatformStripeAccountById(
    platformStripeAccountId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      platformStripeAccountId: [platformStripeAccountId, string()],
    });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/payment-integrations/platform-stripe-account/${mapped.platformStripeAccountId}`;
    return req.call(requestOptions);
  }

  /**
   * Get platform stripe account by id
   *
   * @param platformStripeAccountId
   * @return Response from the API call
   */
  async getPlatformStripeAccountById(
    platformStripeAccountId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PlatformStripeAccountOutput>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      platformStripeAccountId: [platformStripeAccountId, string()],
    });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/payment-integrations/platform-stripe-account/${mapped.platformStripeAccountId}`;
    return req.callAsJson(platformStripeAccountOutputSchema, requestOptions);
  }

  /**
   * Update platform stripe account
   *
   * @param platformStripeAccountId
   * @param body
   * @return Response from the API call
   */
  async updatePlatformStripeAccount(
    platformStripeAccountId: string,
    body?: EditPlatformStripeAccountData,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PlatformStripeAccountOutput>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      platformStripeAccountId: [platformStripeAccountId, string()],
      body: [body, optional(editPlatformStripeAccountDataSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/payment-integrations/platform-stripe-account/${mapped.platformStripeAccountId}`;
    return req.callAsJson(platformStripeAccountOutputSchema, requestOptions);
  }

  /**
   * Get all platform stripe accounts
   *
   * @return Response from the API call
   */
  async getAllPlatformStripeAccounts(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PlatformStripeAccountPaginatedResults>> {
    const req = this.createRequest(
      'GET',
      '/api/v2/payment-integrations/platform-stripe-accounts'
    );
    req.header('Content-Type', 'application/json');
    return req.callAsJson(
      platformStripeAccountPaginatedResultsSchema,
      requestOptions
    );
  }

  /**
   * Disconnect Stripe account
   *
   * @return Response from the API call
   */
  async disconnectStripeAccount(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest(
      'DELETE',
      '/api/v2/payment-integrations/setup-stripe-payments'
    );
    req.header('Content-Type', 'application/json');
    return req.call(requestOptions);
  }

  /**
   * Set up Stripe account
   *
   * @param body
   * @return Response from the API call
   */
  async setUpStripeAccount(
    body?: StripePaymentsSetupInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StripePaymentsSetupOutput>> {
    const req = this.createRequest(
      'POST',
      '/api/v2/payment-integrations/setup-stripe-payments'
    );
    const mapped = req.prepareArgs({
      body: [body, optional(stripePaymentsSetupInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(stripePaymentsSetupOutputSchema, requestOptions);
  }
}
