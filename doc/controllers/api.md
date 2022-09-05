# API

```ts
const apiController = new ApiController(client);
```

## Class Name

`ApiController`


# Get Payment Tokens Available for the Given Networks

Get payment tokens available for the given networks

```ts
async getPaymentTokensAvailableForTheGivenNetworks(
  networkId: number[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<NetworkPaymentToken[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkId` | `number[]` | Query, Required | **Constraints**: `>= 0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NetworkPaymentToken[]`](../../doc/models/network-payment-token.md)

## Example Usage

```ts
const NetworkId: number[] = [194.34, 194.35, 194.36];
const contentType = null;
try {
  const { result, ...httpResponse } = await apiController.getPaymentTokensAvailableForTheGivenNetworks(networkId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

