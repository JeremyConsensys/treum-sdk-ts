# Deprecated

```ts
const deprecatedController = new DeprecatedController(client);
```

## Class Name

`DeprecatedController`

## Methods

* [Revoke User API Key](../../doc/controllers/deprecated.md#revoke-user-api-key)
* [Generate User API Key](../../doc/controllers/deprecated.md#generate-user-api-key)
* [Mint an Item](../../doc/controllers/deprecated.md#mint-an-item)
* [Get All Products](../../doc/controllers/deprecated.md#get-all-products)
* [Create a New Product](../../doc/controllers/deprecated.md#create-a-new-product)
* [Delete a Product](../../doc/controllers/deprecated.md#delete-a-product)
* [Get a Product by Id](../../doc/controllers/deprecated.md#get-a-product-by-id)
* [Edit a Product](../../doc/controllers/deprecated.md#edit-a-product)
* [Deploy the Token Contract for the Product](../../doc/controllers/deprecated.md#deploy-the-token-contract-for-the-product)
* [Get All Items Associated With This Product](../../doc/controllers/deprecated.md#get-all-items-associated-with-this-product)
* [Create a New Item Associated With the Given Collection](../../doc/controllers/deprecated.md#create-a-new-item-associated-with-the-given-collection)
* [Link External Contract to the Product](../../doc/controllers/deprecated.md#link-external-contract-to-the-product)
* [Request a Metadata Refresh for the Given Product](../../doc/controllers/deprecated.md#request-a-metadata-refresh-for-the-given-product)
* [Get a Public Item by Token Contract and Token Id](../../doc/controllers/deprecated.md#get-a-public-item-by-token-contract-and-token-id)
* [Initiate Stripe Payment Session](../../doc/controllers/deprecated.md#initiate-stripe-payment-session)


# Revoke User API Key

Revoke user API key

```ts
async revokeUserAPIKey(
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
  const { result, ...httpResponse } = await deprecatedController.revokeUserAPIKey();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate User API Key

Generate user API key

```ts
async generateUserAPIKey(
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateApiKeyOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GenerateApiKeyOutput`](../../doc/models/generate-api-key-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await deprecatedController.generateUserAPIKey();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Mint an Item

Deprecated, use provision endpoint.

```ts
async mintAnItem(
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
  const { result, ...httpResponse } = await deprecatedController.mintAnItem(itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Products

Get all products

```ts
async getAllProducts(
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
  const { result, ...httpResponse } = await deprecatedController.getAllProducts();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Product

Create a new product

```ts
async createANewProduct(
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
  const { result, ...httpResponse } = await deprecatedController.createANewProduct();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Product

Delete a product

```ts
async deleteAProduct(
  productId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const productId = '000003ba-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await deprecatedController.deleteAProduct(productId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a Product by Id

Get a product by id

```ts
async getAProductById(
  productId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductResponse`](../../doc/models/product-response.md)

## Example Usage

```ts
const productId = '000003ba-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await deprecatedController.getAProductById(productId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Edit a Product

This is a partial update, only attributes present will be updated.

```ts
async editAProduct(
  productId: string,
  body?: CreateProductInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string` | Template, Required | - |
| `body` | [`CreateProductInput \| undefined`](../../doc/models/create-product-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductResponse`](../../doc/models/product-response.md)

## Example Usage

```ts
const productId = '000003ba-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await deprecatedController.editAProduct(productId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Deploy the Token Contract for the Product

Deploy the token contract for the product

```ts
async deployTheTokenContractForTheProduct(
  productId: string,
  body?: DeprecatedDeployTokenContractBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string` | Template, Required | - |
| `body` | [`DeprecatedDeployTokenContractBody \| undefined`](../../doc/models/deprecated-deploy-token-contract-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductResponse`](../../doc/models/product-response.md)

## Example Usage

```ts
const productId = '000003ba-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await deprecatedController.deployTheTokenContractForTheProduct(productId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Items Associated With This Product

Get all items associated with this product

```ts
async getAllItemsAssociatedWithThisProduct(
  productId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Item[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Item[]`](../../doc/models/item.md)

## Example Usage

```ts
const productId = '000003ba-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await deprecatedController.getAllItemsAssociatedWithThisProduct(productId);
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
  productId: string,
  body?: CreateItemForCollectionBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string` | Template, Required | - |
| `body` | [`CreateItemForCollectionBody \| undefined`](../../doc/models/create-item-for-collection-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Item`](../../doc/models/item.md)

## Example Usage

```ts
const productId = '000003ba-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await deprecatedController.createANewItemAssociatedWithTheGivenCollection(productId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Link External Contract to the Product

Link; external contract to the product

```ts
async linkExternalContractToTheProduct(
  productId: string,
  body?: DeprecatedLinkExternalContractBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string` | Template, Required | - |
| `body` | [`DeprecatedLinkExternalContractBody \| undefined`](../../doc/models/deprecated-link-external-contract-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductResponse`](../../doc/models/product-response.md)

## Example Usage

```ts
const productId = '000003ba-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await deprecatedController.linkExternalContractToTheProduct(productId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Request a Metadata Refresh for the Given Product

This makes no guarantees on if/when the request will be made. This is only applicable to items linked to external contracts.

```ts
async requestAMetadataRefreshForTheGivenProduct(
  productId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const productId = '000003ba-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await deprecatedController.requestAMetadataRefreshForTheGivenProduct(productId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a Public Item by Token Contract and Token Id

Deprecated as this endpoint may return incorrect results, contact administrators if you require a public item lookup by contract address & token_id

```ts
async getAPublicItemByTokenContractAndTokenId(
  contractAddress: string,
  tokenId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contractAddress` | `string` | Template, Required | - |
| `tokenId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicItem`](../../doc/models/public-item.md)

## Example Usage

```ts
const contractAddress = 'contract_address6';
const tokenId = 86;
const contentType = null;
try {
  const { result, ...httpResponse } = await deprecatedController.getAPublicItemByTokenContractAndTokenId(contractAddress, tokenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Initiate Stripe Payment Session

Initiate Stripe payment session

```ts
async initiateStripePaymentSession(
  body?: PaymentsCheckoutInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentsCheckoutOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PaymentsCheckoutInput \| undefined`](../../doc/models/payments-checkout-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentsCheckoutOutput`](../../doc/models/payments-checkout-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await deprecatedController.initiateStripePaymentSession();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

