# Payment Integration

```ts
const paymentIntegrationController = new PaymentIntegrationController(client);
```

## Class Name

`PaymentIntegrationController`

## Methods

* [Create a Platform Stripe Account](../../doc/controllers/payment-integration.md#create-a-platform-stripe-account)
* [Delete a Platform Stripe Account by Id](../../doc/controllers/payment-integration.md#delete-a-platform-stripe-account-by-id)
* [Get Platform Stripe Account by Id](../../doc/controllers/payment-integration.md#get-platform-stripe-account-by-id)
* [Update Platform Stripe Account](../../doc/controllers/payment-integration.md#update-platform-stripe-account)
* [Get All Platform Stripe Accounts](../../doc/controllers/payment-integration.md#get-all-platform-stripe-accounts)
* [Disconnect Stripe Account](../../doc/controllers/payment-integration.md#disconnect-stripe-account)
* [Set up Stripe Account](../../doc/controllers/payment-integration.md#set-up-stripe-account)


# Create a Platform Stripe Account

Create a platform stripe account

```ts
async createAPlatformStripeAccount(
  body?: PlatformStripeAccountInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlatformStripeAccountOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PlatformStripeAccountInput \| undefined`](../../doc/models/platform-stripe-account-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PlatformStripeAccountOutput`](../../doc/models/platform-stripe-account-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await paymentIntegrationController.createAPlatformStripeAccount();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Platform Stripe Account by Id

Delete a platform stripe account by id

```ts
async deleteAPlatformStripeAccountById(
  platformStripeAccountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `platformStripeAccountId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const platformStripeAccountId = '000005d6-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await paymentIntegrationController.deleteAPlatformStripeAccountById(platformStripeAccountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Platform Stripe Account by Id

Get platform stripe account by id

```ts
async getPlatformStripeAccountById(
  platformStripeAccountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlatformStripeAccountOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `platformStripeAccountId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PlatformStripeAccountOutput`](../../doc/models/platform-stripe-account-output.md)

## Example Usage

```ts
const platformStripeAccountId = '000005d6-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await paymentIntegrationController.getPlatformStripeAccountById(platformStripeAccountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Platform Stripe Account

Update platform stripe account

```ts
async updatePlatformStripeAccount(
  platformStripeAccountId: string,
  body?: EditPlatformStripeAccountData,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlatformStripeAccountOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `platformStripeAccountId` | `string` | Template, Required | - |
| `body` | [`EditPlatformStripeAccountData \| undefined`](../../doc/models/edit-platform-stripe-account-data.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PlatformStripeAccountOutput`](../../doc/models/platform-stripe-account-output.md)

## Example Usage

```ts
const platformStripeAccountId = '000005d6-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await paymentIntegrationController.updatePlatformStripeAccount(platformStripeAccountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Platform Stripe Accounts

Get all platform stripe accounts

```ts
async getAllPlatformStripeAccounts(
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlatformStripeAccountPaginatedResults>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PlatformStripeAccountPaginatedResults`](../../doc/models/platform-stripe-account-paginated-results.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await paymentIntegrationController.getAllPlatformStripeAccounts();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Disconnect Stripe Account

Disconnect Stripe account

```ts
async disconnectStripeAccount(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await paymentIntegrationController.disconnectStripeAccount();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Set up Stripe Account

Set up Stripe account

```ts
async setUpStripeAccount(
  body?: StripePaymentsSetupInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StripePaymentsSetupOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`StripePaymentsSetupInput \| undefined`](../../doc/models/stripe-payments-setup-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StripePaymentsSetupOutput`](../../doc/models/stripe-payments-setup-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await paymentIntegrationController.setUpStripeAccount();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

