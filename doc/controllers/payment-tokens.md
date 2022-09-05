# Payment Tokens

```ts
const paymentTokensController = new PaymentTokensController(client);
```

## Class Name

`PaymentTokensController`

## Methods

* [Adds a New Payment Token](../../doc/controllers/payment-tokens.md#adds-a-new-payment-token)
* [Delete a Payment Token](../../doc/controllers/payment-tokens.md#delete-a-payment-token)
* [Get Payment Tokens Available for the Given Networks](../../doc/controllers/payment-tokens.md#get-payment-tokens-available-for-the-given-networks)


# Adds a New Payment Token

Adds a new payment token

```ts
async addsANewPaymentToken(
  body?: AddPaymentTokenBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NetworkPaymentToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AddPaymentTokenBody \| undefined`](../../doc/models/add-payment-token-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NetworkPaymentToken`](../../doc/models/network-payment-token.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await paymentTokensController.addsANewPaymentToken();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Payment Token

Delete a payment token

```ts
async deleteAPaymentToken(
  networkId: number,
  address: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkId` | `number` | Template, Required | **Constraints**: `>= 0` |
| `address` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const networkId = 129.56;
const address = 'address6';
const contentType = null;
try {
  const { result, ...httpResponse } = await paymentTokensController.deleteAPaymentToken(networkId, address);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


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
  const { result, ...httpResponse } = await paymentTokensController.getPaymentTokensAvailableForTheGivenNetworks(networkId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

