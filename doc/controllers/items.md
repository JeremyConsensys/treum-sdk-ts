# Items

```ts
const itemsController = new ItemsController(client);
```

## Class Name

`ItemsController`

## Methods

* [Delete Item by Id](../../doc/controllers/items.md#delete-item-by-id)
* [Get an Item by Id](../../doc/controllers/items.md#get-an-item-by-id)
* [Update an Item](../../doc/controllers/items.md#update-an-item)
* [Cancel an Active Listing](../../doc/controllers/items.md#cancel-an-active-listing)
* [Provision a Token in the NFT Contract](../../doc/controllers/items.md#provision-a-token-in-the-nft-contract)
* [Request a Metadata Refresh](../../doc/controllers/items.md#request-a-metadata-refresh)
* [Put an Item up for Sale](../../doc/controllers/items.md#put-an-item-up-for-sale)
* [Transfer an Item](../../doc/controllers/items.md#transfer-an-item)
* [Request a Metadata Refresh for the Given Token Id](../../doc/controllers/items.md#request-a-metadata-refresh-for-the-given-token-id)


# Delete Item by Id

Delete item by id

```ts
async deleteItemById(
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const itemId = '00000bcc-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await itemsController.deleteItemById(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get an Item by Id

Get an item by id

```ts
async getAnItemById(
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
  const { result, ...httpResponse } = await itemsController.getAnItemById(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update an Item

This is a full update -- all attributes specified will overwrite ALL existing attributes and item-type specific attributes must be valid against the item type schema. (if any) Attributes cannot be updated once an item has been minted.

```ts
async updateAnItem(
  itemId: string,
  body?: EditItemBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Template, Required | - |
| `body` | [`EditItemBody \| undefined`](../../doc/models/edit-item-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Item`](../../doc/models/item.md)

## Example Usage

```ts
const itemId = '00000bcc-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await itemsController.updateAnItem(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel an Active Listing

Cancel an active listing

```ts
async cancelAnActiveListing(
  itemId: string,
  body?: CancelItemListingBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Template, Required | - |
| `body` | [`CancelItemListingBody \| undefined`](../../doc/models/cancel-item-listing-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Item`](../../doc/models/item.md)

## Example Usage

```ts
const itemId = '00000bcc-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await itemsController.cancelAnActiveListing(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Provision a Token in the NFT Contract

The standard action is mint with an optional quantity (ERC1155 only).

* To mint an ERC721 token: `{"action": "mint"}`
* To mint 5 ERC1155 tokens: `{"action": "mint", "parameters": {"quantity": "5"}}`

Minting will be done async, callers should either poll the status of this item or use webhooks to listen for mints.

```ts
async provisionATokenInTheNFTContract(
  itemId: string,
  body?: ProvisionItemBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Template, Required | - |
| `body` | [`ProvisionItemBody \| undefined`](../../doc/models/provision-item-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Item`](../../doc/models/item.md)

## Example Usage

```ts
const itemId = '00000bcc-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await itemsController.provisionATokenInTheNFTContract(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Request a Metadata Refresh

This makes no guarantees on if/when the request will be made. This is only applicable to items linked to external contracts.

```ts
async requestAMetadataRefresh(
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const itemId = '00000bcc-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await itemsController.requestAMetadataRefresh(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Put an Item up for Sale

Create a listing for the item. The market_data is dynamic based on the market_type. Please reach out for more information.

```ts
async putAnItemUpForSale(
  itemId: string,
  body?: SellItemBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Template, Required | - |
| `body` | [`SellItemBody \| undefined`](../../doc/models/sell-item-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Item`](../../doc/models/item.md)

## Example Usage

```ts
const itemId = '00000bcc-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await itemsController.putAnItemUpForSale(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Transfer an Item

This transfers an item that is currently owned by the current organization to another ethereum address.

```ts
async transferAnItem(
  itemId: string,
  body?: TransferItemBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `string` | Template, Required | - |
| `body` | [`TransferItemBody \| undefined`](../../doc/models/transfer-item-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Item`](../../doc/models/item.md)

## Example Usage

```ts
const itemId = '00000bcc-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await itemsController.transferAnItem(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Request a Metadata Refresh for the Given Token Id

This makes no guarantees on if/when the request will be made. This is only applicable to items linked to external contracts.

```ts
async requestAMetadataRefreshForTheGivenTokenId(
  networkId: number,
  contractAddress: string,
  tokenId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkId` | `number` | Template, Required | **Constraints**: `>= 0` |
| `contractAddress` | `string` | Template, Required | - |
| `tokenId` | `number` | Template, Required | **Constraints**: `>= 0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const networkId = 129.56;
const contractAddress = 'contract_address6';
const tokenId = 218.46;
const contentType = null;
try {
  const { result, ...httpResponse } = await itemsController.requestAMetadataRefreshForTheGivenTokenId(networkId, contractAddress, tokenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

