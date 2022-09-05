# Collections

```ts
const collectionsController = new CollectionsController(client);
```

## Class Name

`CollectionsController`

## Methods

* [Get All Collections](../../doc/controllers/collections.md#get-all-collections)
* [Create a New Collection](../../doc/controllers/collections.md#create-a-new-collection)
* [Delete a Collection](../../doc/controllers/collections.md#delete-a-collection)
* [Get a Collection by Id](../../doc/controllers/collections.md#get-a-collection-by-id)
* [Edit a Collection](../../doc/controllers/collections.md#edit-a-collection)
* [Get a Collection ABI by Id](../../doc/controllers/collections.md#get-a-collection-abi-by-id)
* [Deploy a Custom Token Contract for a New Collection](../../doc/controllers/collections.md#deploy-a-custom-token-contract-for-a-new-collection)
* [Deploy the Token Contract for the Collection](../../doc/controllers/collections.md#deploy-the-token-contract-for-the-collection)
* [Get All Items Associated With This Collection](../../doc/controllers/collections.md#get-all-items-associated-with-this-collection)
* [Create a New Item Associated With the Given Collection](../../doc/controllers/collections.md#create-a-new-item-associated-with-the-given-collection)
* [Create a Bulk Set of Items Associated With the Given Collection](../../doc/controllers/collections.md#create-a-bulk-set-of-items-associated-with-the-given-collection)
* [Link External Contract to the Collection](../../doc/controllers/collections.md#link-external-contract-to-the-collection)
* [Request a Metadata Refresh for the Given Collection](../../doc/controllers/collections.md#request-a-metadata-refresh-for-the-given-collection)


# Get All Collections

Get all collections

```ts
async getAllCollections(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductResponse[]`](../../doc/models/product-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.getAllCollections();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Collection

Create a new collection

```ts
async createANewCollection(
  body?: CreateProductInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateProductInput \| undefined`](../../doc/models/create-product-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductResponse`](../../doc/models/product-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.createANewCollection();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Collection

Delete a collection

```ts
async deleteACollection(
  collectionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.deleteACollection(collectionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a Collection by Id

Get a collection by id

```ts
async getACollectionById(
  collectionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductResponse`](../../doc/models/product-response.md)

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.getACollectionById(collectionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Edit a Collection

This is a partial update, only attributes present will be updated.

```ts
async editACollection(
  collectionId: string,
  body?: CreateProductInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `body` | [`CreateProductInput \| undefined`](../../doc/models/create-product-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductResponse`](../../doc/models/product-response.md)

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.editACollection(collectionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a Collection ABI by Id

Get a collection ABI by id

```ts
async getACollectionABIById(
  collectionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CollectionAbiOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CollectionAbiOutput`](../../doc/models/collection-abi-output.md)

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.getACollectionABIById(collectionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Deploy a Custom Token Contract for a New Collection

The contract _must_ have one of the following capabilities:

* `ERC721`
* `ERC1155`

Otherwise, the contract will be rejected.

In order to being able to mint collectibles through the platform, the contract _should_ have one of the following capabilities:

* `ADMIN_MINT_SINGLE` (for ERC721)
* `ADMIN_MINT_MULTIPLE`  (for ERC1155)
* `ADMIN_MINT_SINGLE_URI` (for ERC721)

Capabilities are determined by the contract's ABI. You can get the known capabilities ABIs from the endpoint `/v2/public/capabilities`

```ts
async deployACustomTokenContractForANewCollection(
  collectionId: string,
  body?: DeployCustomTokenContractBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `body` | [`DeployCustomTokenContractBody \| undefined`](../../doc/models/deploy-custom-token-contract-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductResponse`](../../doc/models/product-response.md)

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.deployACustomTokenContractForANewCollection(collectionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Deploy the Token Contract for the Collection

Deploy the token contract for the collection

```ts
async deployTheTokenContractForTheCollection(
  collectionId: string,
  body?: DeployTokenContractBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `body` | [`DeployTokenContractBody \| undefined`](../../doc/models/deploy-token-contract-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductResponse`](../../doc/models/product-response.md)

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.deployTheTokenContractForTheCollection(collectionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Items Associated With This Collection

Get all items associated with this collection

```ts
async getAllItemsAssociatedWithThisCollection(
  collectionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Item[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Item[]`](../../doc/models/item.md)

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.getAllItemsAssociatedWithThisCollection(collectionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Item Associated With the Given Collection

Create a new item associated with the given collection

```ts
async createANewItemAssociatedWithTheGivenCollection(
  collectionId: string,
  body?: CreateItemForCollectionBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `body` | [`CreateItemForCollectionBody \| undefined`](../../doc/models/create-item-for-collection-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Item`](../../doc/models/item.md)

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.createANewItemAssociatedWithTheGivenCollection(collectionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a Bulk Set of Items Associated With the Given Collection

Create a bulk set of items associated with the given collection

```ts
async createABulkSetOfItemsAssociatedWithTheGivenCollection(
  collectionId: string,
  body?: CreateBulkItemForCollectionBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateBulkItemApiOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `body` | [`CreateBulkItemForCollectionBody \| undefined`](../../doc/models/create-bulk-item-for-collection-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateBulkItemApiOutput`](../../doc/models/create-bulk-item-api-output.md)

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.createABulkSetOfItemsAssociatedWithTheGivenCollection(collectionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Link External Contract to the Collection

Link external contract to the collection

```ts
async linkExternalContractToTheCollection(
  collectionId: string,
  body?: LinkExternalContractBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `body` | [`LinkExternalContractBody \| undefined`](../../doc/models/link-external-contract-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductResponse`](../../doc/models/product-response.md)

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.linkExternalContractToTheCollection(collectionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Request a Metadata Refresh for the Given Collection

This makes no guarantees on if/when the request will be made. This is only applicable to items linked to external contracts.

```ts
async requestAMetadataRefreshForTheGivenCollection(
  collectionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const collectionId = '00000d04-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await collectionsController.requestAMetadataRefreshForTheGivenCollection(collectionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

