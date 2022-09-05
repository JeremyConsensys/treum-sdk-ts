/**
 * Treum Platform APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  NetworkPaymentToken,
  networkPaymentTokenSchema,
} from '../models/networkPaymentToken';
import { array, number } from '../schema';
import { BaseController } from './baseController';

export class ApiController extends BaseController {
  /**
   * Get payment tokens available for the given networks
   *
   * @param networkId
   * @return Response from the API call
   */
  async getPaymentTokensAvailableForTheGivenNetworks(
    networkId: number[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<NetworkPaymentToken[]>> {
    const req = this.createRequest('GET', '/api/v2/payment-tokens');
    const mapped = req.prepareArgs({ networkId: [networkId, array(number())] });
    req.header('Content-Type', 'application/json');
    req.query('network_id', mapped.networkId);
    return req.callAsJson(array(networkPaymentTokenSchema), requestOptions);
  }
}