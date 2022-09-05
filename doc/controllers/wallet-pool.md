# Wallet Pool

```ts
const walletPoolController = new WalletPoolController(client);
```

## Class Name

`WalletPoolController`

## Methods

* [Get All Wallet Pools for an Organization](../../doc/controllers/wallet-pool.md#get-all-wallet-pools-for-an-organization)
* [Creates a New Wallet Pool for the User S Organization and a Specific Network](../../doc/controllers/wallet-pool.md#creates-a-new-wallet-pool-for-the-user-s-organization-and-a-specific-network)
* [Get a Specific Wallet Pool by ID](../../doc/controllers/wallet-pool.md#get-a-specific-wallet-pool-by-id)
* [Patches a Specific Wallet Pool by ID](../../doc/controllers/wallet-pool.md#patches-a-specific-wallet-pool-by-id)


# Get All Wallet Pools for an Organization

If no organization_id is specified, this is derived from the user's organization.

```ts
async getAllWalletPoolsForAnOrganization(
  organizationId?: string,
  cursor?: string,
  limit?: number,
  orderBy?: OrderBy9Enum,
  orderDirection?: OrderDirection9Enum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaginatedResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `organizationId` | `string \| undefined` | Query, Optional | - |
| `cursor` | `string \| undefined` | Query, Optional | SafeString |
| `limit` | `number \| undefined` | Query, Optional | Uint<br>**Constraints**: `>= 0` |
| `orderBy` | [`OrderBy9Enum \| undefined`](../../doc/models/order-by-9-enum.md) | Query, Optional | - |
| `orderDirection` | [`OrderDirection9Enum \| undefined`](../../doc/models/order-direction-9-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaginatedResult`](../../doc/models/paginated-result.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await walletPoolController.getAllWalletPoolsForAnOrganization();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Creates a New Wallet Pool for the User S Organization and a Specific Network

Name of the wallet pool must be unique within the organization.

```ts
async createsANewWalletPoolForTheUserSOrganizationAndASpecificNetwork(
  body?: CreateWalletPoolBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WalletPoolOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateWalletPoolBody \| undefined`](../../doc/models/create-wallet-pool-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WalletPoolOutput`](../../doc/models/wallet-pool-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await walletPoolController.createsANewWalletPoolForTheUserSOrganizationAndASpecificNetwork();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a Specific Wallet Pool by ID

Get a specific wallet pool by ID.

```ts
async getASpecificWalletPoolByID(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WalletPoolOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WalletPoolOutput`](../../doc/models/wallet-pool-output.md)

## Example Usage

```ts
const id = '00001770-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await walletPoolController.getASpecificWalletPoolByID(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Patches a Specific Wallet Pool by ID

Only the wallet pool name can be updated.

```ts
async patchesASpecificWalletPoolByID(
  id: string,
  body?: EditWalletPoolBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WalletPoolOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`EditWalletPoolBody \| undefined`](../../doc/models/edit-wallet-pool-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WalletPoolOutput`](../../doc/models/wallet-pool-output.md)

## Example Usage

```ts
const id = '00001770-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await walletPoolController.patchesASpecificWalletPoolByID(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

