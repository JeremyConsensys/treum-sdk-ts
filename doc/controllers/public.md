# Public

```ts
const publicController = new PublicController(client);
```

## Class Name

`PublicController`

## Methods

* [Get Known Contract Capabilities](../../doc/controllers/public.md#get-known-contract-capabilities)
* [Get the Application Binary Interface ABI for a Specific Capability](../../doc/controllers/public.md#get-the-application-binary-interface-abi-for-a-specific-capability)
* [Get Collection Stats](../../doc/controllers/public.md#get-collection-stats)
* [Get Metadata for a Specific Token in a Collection](../../doc/controllers/public.md#get-metadata-for-a-specific-token-in-a-collection)
* [Get Global Contract Addresses](../../doc/controllers/public.md#get-global-contract-addresses)
* [Get a Public Item by Id](../../doc/controllers/public.md#get-a-public-item-by-id)
* [Get Item History](../../doc/controllers/public.md#get-item-history)
* [Get Item Owners](../../doc/controllers/public.md#get-item-owners)
* [Get All the Available Networks](../../doc/controllers/public.md#get-all-the-available-networks)
* [Get Public Organization Attributes by User Email](../../doc/controllers/public.md#get-public-organization-attributes-by-user-email)
* [Cancel Stripe Payment Session](../../doc/controllers/public.md#cancel-stripe-payment-session)
* [Redirect to Stripe Onboarding Page](../../doc/controllers/public.md#redirect-to-stripe-onboarding-page)
* [Redirect to Stripe Onboarding Page 1](../../doc/controllers/public.md#redirect-to-stripe-onboarding-page-1)
* [Get the Item That Is Redeemable for the Given Key](../../doc/controllers/public.md#get-the-item-that-is-redeemable-for-the-given-key)
* [Redeem Claim](../../doc/controllers/public.md#redeem-claim)
* [Get API Status](../../doc/controllers/public.md#get-api-status)
* [Get All Items Owned by an Eth Address](../../doc/controllers/public.md#get-all-items-owned-by-an-eth-address)
* [Verify Claim](../../doc/controllers/public.md#verify-claim)
* [Get All Collections by an Organization](../../doc/controllers/public.md#get-all-collections-by-an-organization)
* [Get All Public Items From an Organization](../../doc/controllers/public.md#get-all-public-items-from-an-organization)


# Get Known Contract Capabilities

Get known contract capabilities

```ts
async getKnownContractCapabilities(
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicGetCapabilitiesOutput[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicGetCapabilitiesOutput[]`](../../doc/models/public-get-capabilities-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getKnownContractCapabilities();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get the Application Binary Interface ABI for a Specific Capability

Get the Application Binary Interface (ABI) for a specific capability

```ts
async getTheApplicationBinaryInterfaceABIForASpecificCapability(
  capability: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicGetCapabilitiesOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capability` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicGetCapabilitiesOutput`](../../doc/models/public-get-capabilities-output.md)

## Example Usage

```ts
const capability = 'capability0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getTheApplicationBinaryInterfaceABIForASpecificCapability(capability);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Collection Stats

Get collection stats

```ts
async getCollectionStats(
  collectionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CollectionStats>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CollectionStats`](../../doc/models/collection-stats.md)

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getCollectionStats(collectionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Metadata for a Specific Token in a Collection

Get metadata for a specific token in a collection

```ts
async getMetadataForASpecificTokenInACollection(
  collectionId: string,
  tokenId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `tokenId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const tokenId = 86;
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getMetadataForASpecificTokenInACollection(collectionId, tokenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Global Contract Addresses

Get global contract addresses

```ts
async getGlobalContractAddresses(
  networkId: number[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicGetContractOutput[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkId` | `number[]` | Query, Required | **Constraints**: `>= 0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicGetContractOutput[]`](../../doc/models/public-get-contract-output.md)

## Example Usage

```ts
const NetworkId: number[] = [194.34, 194.35, 194.36];
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getGlobalContractAddresses(networkId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a Public Item by Id

Public items have been minted, and each has a valid token address and token id.

```ts
async getAPublicItemById(
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicItem`](../../doc/models/public-item.md)

## Example Usage

```ts
const itemId = '00000bcc-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getAPublicItemById(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Item History

Get item history

```ts
async getItemHistory(
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicGetItemHistoryViewResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicGetItemHistoryViewResponse`](../../doc/models/public-get-item-history-view-response.md)

## Example Usage

```ts
const itemId = '00000bcc-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getItemHistory(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Item Owners

Get item owners

```ts
async getItemOwners(
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicItemOwnersOutput[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicItemOwnersOutput[]`](../../doc/models/public-item-owners-output.md)

## Example Usage

```ts
const itemId = '00000bcc-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getItemOwners(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All the Available Networks

Get all the available networks

```ts
async getAllTheAvailableNetworks(
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicNetwork[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicNetwork[]`](../../doc/models/public-network.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getAllTheAvailableNetworks();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Public Organization Attributes by User Email

Includes whether an org is setup with auth0

```ts
async getPublicOrganizationAttributesByUserEmail(
  email: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicOrganizationSchemaV2[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicOrganizationSchemaV2[]`](../../doc/models/public-organization-schema-v2.md)

## Example Usage

```ts
const email = 'email6';
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getPublicOrganizationAttributesByUserEmail(email);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Stripe Payment Session

Cancel Stripe payment session

```ts
async cancelStripePaymentSession(
  body?: PaymentsCancelCheckoutInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PaymentsCancelCheckoutInput \| undefined`](../../doc/models/payments-cancel-checkout-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.cancelStripePaymentSession();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Redirect to Stripe Onboarding Page

Redirect to Stripe onboarding page

```ts
async redirectToStripeOnboardingPage(
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
  const { result, ...httpResponse } = await publicController.redirectToStripeOnboardingPage(integrationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Redirect to Stripe Onboarding Page 1

Redirect to Stripe onboarding page

```ts
async redirectToStripeOnboardingPage1(
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
  const { result, ...httpResponse } = await publicController.redirectToStripeOnboardingPage1(integrationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get the Item That Is Redeemable for the Given Key

Get the item that is redeemable for the given key

```ts
async getTheItemThatIsRedeemableForTheGivenKey(
  key: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetClaimOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetClaimOutput`](../../doc/models/get-claim-output.md)

## Example Usage

```ts
const key = 'key0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getTheItemThatIsRedeemableForTheGivenKey(key);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Redeem Claim

This sends the collectible to the specified address, if the pin is valid.

```ts
async redeemClaim(
  key: string,
  body?: PublicRedeemClaimBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Template, Required | - |
| `body` | [`PublicRedeemClaimBody \| undefined`](../../doc/models/public-redeem-claim-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicItem`](../../doc/models/public-item.md)

## Example Usage

```ts
const key = 'key0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.redeemClaim(key);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get API Status

Get API status

```ts
async getAPIStatus(
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatusResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatusResponse`](../../doc/models/status-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getAPIStatus();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Items Owned by an Eth Address

Must specify org_id and network_id that will be searched. Additionally, the tokens can be restricted to one or more contract addresses.

```ts
async getAllItemsOwnedByAnEthAddress(
  orgId: string,
  ethAddress: string,
  networkId: number[],
  contractAddress: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicItemOwnership[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `ethAddress` | `string` | Template, Required | - |
| `networkId` | `number[]` | Query, Required | **Constraints**: `>= 0` |
| `contractAddress` | `string[]` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicItemOwnership[]`](../../doc/models/public-item-ownership.md)

## Example Usage

```ts
const orgId = '00000ec8-0000-0000-0000-000000000000';
const ethAddress = 'eth_address0';
const NetworkId: number[] = [194.34, 194.35, 194.36];
const ContractAddress: string[] = ['contract_address3', 'contract_address4'];
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getAllItemsOwnedByAnEthAddress(orgId, ethAddress, networkId, contractAddress);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Verify Claim

This sends a pin code to the email registered on file for this claim.

```ts
async verifyClaim(
  key: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicItem`](../../doc/models/public-item.md)

## Example Usage

```ts
const key = 'key0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.verifyClaim(key);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Collections by an Organization

Get all collections by an organization

```ts
async getAllCollectionsByAnOrganization(
  orgId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicCollectionOutput[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicCollectionOutput[]`](../../doc/models/public-collection-output.md)

## Example Usage

```ts
const orgId = '00000ec8-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getAllCollectionsByAnOrganization(orgId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Public Items From an Organization

Public items have been minted, and each has a valid token address and token id.

```ts
async getAllPublicItemsFromAnOrganization(
  orgId: string,
  networkId: number[],
  collectionId: string[],
  attribute: string[],
  cursor?: string,
  limit?: number,
  orderBy?: OrderBy10Enum,
  orderDirection?: OrderDirection9Enum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicItemsPaginatedResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `networkId` | `number[]` | Query, Required | **Constraints**: `>= 0` |
| `collectionId` | `string[]` | Query, Required | - |
| `attribute` | `string[]` | Query, Required | - |
| `cursor` | `string \| undefined` | Query, Optional | SafeString |
| `limit` | `number \| undefined` | Query, Optional | Uint<br>**Constraints**: `>= 0` |
| `orderBy` | [`OrderBy10Enum \| undefined`](../../doc/models/order-by-10-enum.md) | Query, Optional | - |
| `orderDirection` | [`OrderDirection9Enum \| undefined`](../../doc/models/order-direction-9-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicItemsPaginatedResult`](../../doc/models/public-items-paginated-result.md)

## Example Usage

```ts
const orgId = '00000ec8-0000-0000-0000-000000000000';
const NetworkId: number[] = [194.34, 194.35, 194.36];
const CollectionId: string[] = ['0000270e-0000-0000-0000-000000000000'];
const Attribute: string[] = ['attribute6'];
const contentType = null;
try {
  const { result, ...httpResponse } = await publicController.getAllPublicItemsFromAnOrganization(orgId, networkId, collectionId, attribute);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

