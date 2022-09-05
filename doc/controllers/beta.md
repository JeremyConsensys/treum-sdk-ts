# Beta

```ts
const betaController = new BetaController(client);
```

## Class Name

`BetaController`

## Methods

* [Get All Email Claims for an Organization](../../doc/controllers/beta.md#get-all-email-claims-for-an-organization)
* [Create a New Email Claim](../../doc/controllers/beta.md#create-a-new-email-claim)
* [Get Email Claim by Id](../../doc/controllers/beta.md#get-email-claim-by-id)
* [Resend Email Claim With the Given Id](../../doc/controllers/beta.md#resend-email-claim-with-the-given-id)
* [Revoke Email Claim With the Given Id](../../doc/controllers/beta.md#revoke-email-claim-with-the-given-id)
* [Get All Email Integration Configs for an Organization](../../doc/controllers/beta.md#get-all-email-integration-configs-for-an-organization)
* [Create a New Organization Email Config](../../doc/controllers/beta.md#create-a-new-organization-email-config)
* [Creates and Sends a New Test Mail](../../doc/controllers/beta.md#creates-and-sends-a-new-test-mail)
* [Delete an Organization Email Config](../../doc/controllers/beta.md#delete-an-organization-email-config)
* [Get Organization Email Config by Id](../../doc/controllers/beta.md#get-organization-email-config-by-id)
* [Edit an Organization Email Config](../../doc/controllers/beta.md#edit-an-organization-email-config)
* [Revoke All Claims for the Item](../../doc/controllers/beta.md#revoke-all-claims-for-the-item)
* [Create a New Claim or Replace an Existing Claim on the Item](../../doc/controllers/beta.md#create-a-new-claim-or-replace-an-existing-claim-on-the-item)
* [Create a Payment Intent to Purchase an Item From a Listing](../../doc/controllers/beta.md#create-a-payment-intent-to-purchase-an-item-from-a-listing)
* [Cancel the Payment Intent](../../doc/controllers/beta.md#cancel-the-payment-intent)
* [Get All Sales Records for an Organization](../../doc/controllers/beta.md#get-all-sales-records-for-an-organization)
* [Get Sale Record by Id](../../doc/controllers/beta.md#get-sale-record-by-id)
* [Get All Transaction Records for an Organization](../../doc/controllers/beta.md#get-all-transaction-records-for-an-organization)
* [Get Transaction Record by Id](../../doc/controllers/beta.md#get-transaction-record-by-id)


# Get All Email Claims for an Organization

Get all email claims for an organization

```ts
async getAllEmailClaimsForAnOrganization(
  collectionId: string[],
  itemId: string[],
  tokenId: string[],
  email?: string,
  active?: boolean,
  claimed?: boolean,
  cursor?: string,
  limit?: number,
  orderBy?: OrderBy7Enum,
  orderDirection?: OrderDirection9Enum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailClaimsPaginatedResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string[]` | Query, Required | - |
| `itemId` | `string[]` | Query, Required | - |
| `tokenId` | `string[]` | Query, Required | - |
| `email` | `string \| undefined` | Query, Optional | SafeString |
| `active` | `boolean \| undefined` | Query, Optional | - |
| `claimed` | `boolean \| undefined` | Query, Optional | - |
| `cursor` | `string \| undefined` | Query, Optional | SafeString |
| `limit` | `number \| undefined` | Query, Optional | Uint<br>**Constraints**: `>= 0` |
| `orderBy` | [`OrderBy7Enum \| undefined`](../../doc/models/order-by-7-enum.md) | Query, Optional | - |
| `orderDirection` | [`OrderDirection9Enum \| undefined`](../../doc/models/order-direction-9-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailClaimsPaginatedResult`](../../doc/models/email-claims-paginated-result.md)

## Example Usage

```ts
const CollectionId: string[] = ['0000270e-0000-0000-0000-000000000000'];
const ItemId: string[] = ['0000196e-0000-0000-0000-000000000000', '0000196f-0000-0000-0000-000000000000', '00001970-0000-0000-0000-000000000000'];
const TokenId: string[] = ['token_id3'];
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.getAllEmailClaimsForAnOrganization(collectionId, itemId, tokenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Email Claim

Create a new email claim

```ts
async createANewEmailClaim(
  body?: CreateEmailClaimInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailClaim>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateEmailClaimInput \| undefined`](../../doc/models/create-email-claim-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailClaim`](../../doc/models/email-claim.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.createANewEmailClaim();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Email Claim by Id

Get email claim by id

```ts
async getEmailClaimById(
  claimId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailClaim>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `claimId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailClaim`](../../doc/models/email-claim.md)

## Example Usage

```ts
const claimId = '0000031c-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.getEmailClaimById(claimId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Resend Email Claim With the Given Id

This sends the same claim to a designated email address. If none specified, it sends to the original email address on file.

```ts
async resendEmailClaimWithTheGivenId(
  claimId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailClaim>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `claimId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailClaim`](../../doc/models/email-claim.md)

## Example Usage

```ts
const claimId = '0000031c-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.resendEmailClaimWithTheGivenId(claimId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Revoke Email Claim With the Given Id

Revoke email claim with the given id

```ts
async revokeEmailClaimWithTheGivenId(
  claimId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `claimId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const claimId = '0000031c-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.revokeEmailClaimWithTheGivenId(claimId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Email Integration Configs for an Organization

Get all email integration configs for an organization

```ts
async getAllEmailIntegrationConfigsForAnOrganization(
  provider?: Provider1Enum,
  cursor?: string,
  limit?: number,
  orderBy?: OrderBy8Enum,
  orderDirection?: OrderDirection9Enum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailIntegrationsPaginatedResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `provider` | [`Provider1Enum \| undefined`](../../doc/models/provider-1-enum.md) | Query, Optional | - |
| `cursor` | `string \| undefined` | Query, Optional | SafeString |
| `limit` | `number \| undefined` | Query, Optional | Uint<br>**Constraints**: `>= 0` |
| `orderBy` | [`OrderBy8Enum \| undefined`](../../doc/models/order-by-8-enum.md) | Query, Optional | - |
| `orderDirection` | [`OrderDirection9Enum \| undefined`](../../doc/models/order-direction-9-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailIntegrationsPaginatedResult`](../../doc/models/email-integrations-paginated-result.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.getAllEmailIntegrationConfigsForAnOrganization();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Organization Email Config

Create a new organization email config

```ts
async createANewOrganizationEmailConfig(
  body?: EmailIntegrationInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailIntegrationOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`EmailIntegrationInput \| undefined`](../../doc/models/email-integration-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailIntegrationOutput`](../../doc/models/email-integration-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.createANewOrganizationEmailConfig();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Creates and Sends a New Test Mail

Creates and sends a new test mail.

```ts
async createsAndSendsANewTestMail(
  body?: SendTestEmailInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SendTestEmailInput \| undefined`](../../doc/models/send-test-email-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.createsAndSendsANewTestMail();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete an Organization Email Config

Delete an organization email config

```ts
async deleteAnOrganizationEmailConfig(
  integrationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `integrationId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const integrationId = '000014ac-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.deleteAnOrganizationEmailConfig(integrationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Organization Email Config by Id

Get organization email config by id

```ts
async getOrganizationEmailConfigById(
  integrationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailIntegrationOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `integrationId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailIntegrationOutput`](../../doc/models/email-integration-output.md)

## Example Usage

```ts
const integrationId = '000014ac-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.getOrganizationEmailConfigById(integrationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Edit an Organization Email Config

Edit an organization email config

```ts
async editAnOrganizationEmailConfig(
  integrationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailIntegrationOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `integrationId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailIntegrationOutput`](../../doc/models/email-integration-output.md)

## Example Usage

```ts
const integrationId = '000014ac-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.editAnOrganizationEmailConfig(integrationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Revoke All Claims for the Item

Any existing emails sent out with a claim link will no longer be valid.

```ts
async revokeAllClaimsForTheItem(
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Item`](../../doc/models/item.md)

## Example Usage

```ts
const itemId = '00000bcc-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.revokeAllClaimsForTheItem(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Claim or Replace an Existing Claim on the Item

The recipient will receive an email with a link to claim the item. If a claim exists, a new email will be sent out, and the old one will no longer be valid. The template variable argument is deprecated since organizations now have customizable email templates.

```ts
async createANewClaimOrReplaceAnExistingClaimOnTheItem(
  itemId: string,
  body?: CreateItemClaimBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ItemClaim>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Template, Required | - |
| `body` | [`CreateItemClaimBody \| undefined`](../../doc/models/create-item-claim-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ItemClaim`](../../doc/models/item-claim.md)

## Example Usage

```ts
const itemId = '00000bcc-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.createANewClaimOrReplaceAnExistingClaimOnTheItem(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a Payment Intent to Purchase an Item From a Listing

The payment intent can be made with any provider configured for the listing. The provider must be one of the following: STRIPE, COINBASE. The response data will have provider specific data in the data field.

```ts
async createAPaymentIntentToPurchaseAnItemFromAListing(
  body?: CreatePaymentIntentInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentIntentOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatePaymentIntentInput \| undefined`](../../doc/models/create-payment-intent-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentIntentOutput`](../../doc/models/payment-intent-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.createAPaymentIntentToPurchaseAnItemFromAListing();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel the Payment Intent

Cancel the payment intent

```ts
async cancelThePaymentIntent(
  paymentIntentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentIntentId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const paymentIntentId = 'payment_intent_id4';
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.cancelThePaymentIntent(paymentIntentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Sales Records for an Organization

Get all sales records for an organization

```ts
async getAllSalesRecordsForAnOrganization(
  collectionId: string[],
  itemId: string[],
  listingType: ListingType3Enum[],
  recipientType?: RecipientType3Enum,
  cursor?: string,
  limit?: number,
  orderBy?: OrderBy11Enum,
  orderDirection?: OrderDirection9Enum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SalesPaginatedResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string[]` | Query, Required | - |
| `itemId` | `string[]` | Query, Required | - |
| `listingType` | [`ListingType3Enum[]`](../../doc/models/listing-type-3-enum.md) | Query, Required | - |
| `recipientType` | [`RecipientType3Enum \| undefined`](../../doc/models/recipient-type-3-enum.md) | Query, Optional | - |
| `cursor` | `string \| undefined` | Query, Optional | SafeString |
| `limit` | `number \| undefined` | Query, Optional | Uint<br>**Constraints**: `>= 0` |
| `orderBy` | [`OrderBy11Enum \| undefined`](../../doc/models/order-by-11-enum.md) | Query, Optional | - |
| `orderDirection` | [`OrderDirection9Enum \| undefined`](../../doc/models/order-direction-9-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SalesPaginatedResult`](../../doc/models/sales-paginated-result.md)

## Example Usage

```ts
const CollectionId: string[] = ['0000270e-0000-0000-0000-000000000000'];
const ItemId: string[] = ['0000196e-0000-0000-0000-000000000000', '0000196f-0000-0000-0000-000000000000', '00001970-0000-0000-0000-000000000000'];
const ListingType: ListingType3Enum[] = ['BUYER_MINT', 'FIAT_LAZY_MINT', 'DEFAULT'];
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.getAllSalesRecordsForAnOrganization(collectionId, itemId, listingType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Sale Record by Id

Get sale record by id

```ts
async getSaleRecordById(
  saleId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SaleOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SaleOutput`](../../doc/models/sale-output.md)

## Example Usage

```ts
const saleId = '00000c4a-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.getSaleRecordById(saleId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Transaction Records for an Organization

Get all transaction records for an organization

```ts
async getAllTransactionRecordsForAnOrganization(
  networkId: number[],
  txType: TxType3Enum[],
  state: StateEnum[],
  signer: string[],
  cursor?: string,
  limit?: number,
  orderBy?: OrderBy12Enum,
  orderDirection?: OrderDirection9Enum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionsPaginatedResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkId` | `number[]` | Query, Required | **Constraints**: `>= 0` |
| `txType` | [`TxType3Enum[]`](../../doc/models/tx-type-3-enum.md) | Query, Required | - |
| `state` | [`StateEnum[]`](../../doc/models/state-enum.md) | Query, Required | - |
| `signer` | `string[]` | Query, Required | - |
| `cursor` | `string \| undefined` | Query, Optional | SafeString |
| `limit` | `number \| undefined` | Query, Optional | Uint<br>**Constraints**: `>= 0` |
| `orderBy` | [`OrderBy12Enum \| undefined`](../../doc/models/order-by-12-enum.md) | Query, Optional | - |
| `orderDirection` | [`OrderDirection9Enum \| undefined`](../../doc/models/order-direction-9-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionsPaginatedResult`](../../doc/models/transactions-paginated-result.md)

## Example Usage

```ts
const NetworkId: number[] = [194.34, 194.35, 194.36];
const TxType: TxType3Enum[] = ['CREATE_FOR_ADMIN_MINT', 'FUND_ACCOUNT'];
const State: StateEnum[] = ['COMPLETED', 'CANCELLED', 'PENDING'];
const Signer: string[] = ['signer5', 'signer6'];
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.getAllTransactionRecordsForAnOrganization(networkId, txType, state, signer);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Transaction Record by Id

Get transaction record by id

```ts
async getTransactionRecordById(
  transactionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionOutput`](../../doc/models/transaction-output.md)

## Example Usage

```ts
const transactionId = '00001ac0-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await betaController.getTransactionRecordById(transactionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

