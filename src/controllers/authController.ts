/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ApiKeyCreatedOutput,
  apiKeyCreatedOutputSchema,
} from '../models/apiKeyCreatedOutput';
import { ApiKeyOutput, apiKeyOutputSchema } from '../models/apiKeyOutput';
import {
  ApiKeyPaginatedOutput,
  apiKeyPaginatedOutputSchema,
} from '../models/apiKeyPaginatedOutput';
import {
  ChangePasswordInput,
  changePasswordInputSchema,
} from '../models/changePasswordInput';
import {
  CreateApiKeyBody,
  createApiKeyBodySchema,
} from '../models/createApiKeyBody';
import {
  ForgotPasswordInput,
  forgotPasswordInputSchema,
} from '../models/forgotPasswordInput';
import {
  ForgotPasswordResponse,
  forgotPasswordResponseSchema,
} from '../models/forgotPasswordResponse';
import { Include1Enum, include1EnumSchema } from '../models/include1Enum';
import { LoginResponse, loginResponseSchema } from '../models/loginResponse';
import {
  OrderDirection8Enum,
  orderDirection8EnumSchema,
} from '../models/orderDirection8Enum';
import {
  ResetPasswordUsingTokenInput,
  resetPasswordUsingTokenInputSchema,
} from '../models/resetPasswordUsingTokenInput';
import { UserV2Output, userV2OutputSchema } from '../models/userV2Output';
import {
  VerifyWeb2Input,
  verifyWeb2InputSchema,
} from '../models/verifyWeb2Input';
import { Web2LoginInput, web2LoginInputSchema } from '../models/web2LoginInput';
import { array, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class AuthController extends BaseController {
  /**
   * Get all API keys for the current user
   *
   * @param limit           PaginationLimit
   * @param orderDirection  Example: ASC
   * @param cursor          SafeString
   * @return Response from the API call
   */
  async getAllAPIKeysForTheCurrentUser(
    limit?: number,
    orderDirection?: OrderDirection8Enum,
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiKeyPaginatedOutput>> {
    const req = this.createRequest('GET', '/api/v2/api-keys');
    const mapped = req.prepareArgs({
      limit: [limit, optional(number())],
      orderDirection: [orderDirection, optional(orderDirection8EnumSchema)],
      cursor: [cursor, optional(string())],
    });
    req.header('Content-Type', 'application/json');
    req.query('limit', mapped.limit);
    req.query('order_direction', mapped.orderDirection);
    req.query('cursor', mapped.cursor);
    return req.callAsJson(apiKeyPaginatedOutputSchema, requestOptions);
  }

  /**
   * Create a new API key
   *
   * @param body
   * @return Response from the API call
   */
  async createANewAPIKey(
    body?: CreateApiKeyBody,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiKeyCreatedOutput>> {
    const req = this.createRequest('POST', '/api/v2/api-keys');
    const mapped = req.prepareArgs({
      body: [body, optional(createApiKeyBodySchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(apiKeyCreatedOutputSchema, requestOptions);
  }

  /**
   * Delete an API key
   *
   * @param apiKeyId
   * @return Response from the API call
   */
  async deleteAnAPIKey(
    apiKeyId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ apiKeyId: [apiKeyId, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/api-keys/${mapped.apiKeyId}`;
    return req.call(requestOptions);
  }

  /**
   * Get API key by id
   *
   * @param apiKeyId
   * @return Response from the API call
   */
  async getAPIKeyById(
    apiKeyId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiKeyOutput>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ apiKeyId: [apiKeyId, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/api-keys/${mapped.apiKeyId}`;
    return req.callAsJson(apiKeyOutputSchema, requestOptions);
  }

  /**
   * Change user password
   *
   * @param body
   * @return Response from the API call
   */
  async changeUserPassword(
    body?: ChangePasswordInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LoginResponse>> {
    const req = this.createRequest('POST', '/api/v2/change-password');
    const mapped = req.prepareArgs({
      body: [body, optional(changePasswordInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(loginResponseSchema, requestOptions);
  }

  /**
   * For a registered user, this sends a token to the email address which can be used to reset the
   * password.  This endpoint is only applicable to users whose account currently contains a password,
   * and cannot be used for web3 accounts.
   *
   * @param body
   * @return Response from the API call
   */
  async forgotUserPassword(
    body?: ForgotPasswordInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ForgotPasswordResponse>> {
    const req = this.createRequest('POST', '/api/v2/forgot');
    const mapped = req.prepareArgs({
      body: [body, optional(forgotPasswordInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(forgotPasswordResponseSchema, requestOptions);
  }

  /**
   * Log in user
   *
   * @param body
   * @return Response from the API call
   */
  async logInUser(
    body?: Web2LoginInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LoginResponse>> {
    const req = this.createRequest('POST', '/api/v2/login');
    const mapped = req.prepareArgs({
      body: [body, optional(web2LoginInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(loginResponseSchema, requestOptions);
  }

  /**
   * Logout user
   *
   * @return Response from the API call
   */
  async logoutUser(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/api/v2/logout');
    req.header('Content-Type', 'application/json');
    return req.call(requestOptions);
  }

  /**
   * Get the current user
   *
   * @param include
   * @return Response from the API call
   */
  async getTheCurrentUser(
    include?: Include1Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserV2Output>> {
    const req = this.createRequest('GET', '/api/v2/me');
    const mapped = req.prepareArgs({
      include: [include, optional(array(include1EnumSchema))],
    });
    req.header('Content-Type', 'application/json');
    req.query('include', mapped.include);
    return req.callAsJson(userV2OutputSchema, requestOptions);
  }

  /**
   * This resets the user's password from a token received in an email.
   *
   * @param body
   * @return Response from the API call
   */
  async resetUserPassword(
    body?: ResetPasswordUsingTokenInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LoginResponse>> {
    const req = this.createRequest('POST', '/api/v2/reset');
    const mapped = req.prepareArgs({
      body: [body, optional(resetPasswordUsingTokenInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(loginResponseSchema, requestOptions);
  }

  /**
   * Resend verification email
   *
   * @param userId
   * @return Response from the API call
   */
  async resendVerificationEmail(
    userId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ userId: [userId, string()] });
    req.header('Content-Type', 'application/json');
    req.appendTemplatePath`/api/v2/users/${mapped.userId}/resend-verify-email`;
    return req.call(requestOptions);
  }

  /**
   * This verifies the ownership of an email by sending the token received, along with the password to
   * set for the account.
   *
   * @param body
   * @return Response from the API call
   */
  async verifyUser(
    body?: VerifyWeb2Input,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LoginResponse>> {
    const req = this.createRequest('POST', '/api/v2/verify');
    const mapped = req.prepareArgs({
      body: [body, optional(verifyWeb2InputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(loginResponseSchema, requestOptions);
  }
}
