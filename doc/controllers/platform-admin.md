# Platform Admin

```ts
const platformAdminController = new PlatformAdminController(client);
```

## Class Name

`PlatformAdminController`

## Methods

* [Get All the Available Networks](../../doc/controllers/platform-admin.md#get-all-the-available-networks)
* [Create a New Network](../../doc/controllers/platform-admin.md#create-a-new-network)
* [Get a Specific Network](../../doc/controllers/platform-admin.md#get-a-specific-network)
* [Edit a Specific Network](../../doc/controllers/platform-admin.md#edit-a-specific-network)
* [Create a New Organization](../../doc/controllers/platform-admin.md#create-a-new-organization)
* [Subscribe Organization to a Plan](../../doc/controllers/platform-admin.md#subscribe-organization-to-a-plan)
* [Create a New Plan](../../doc/controllers/platform-admin.md#create-a-new-plan)
* [Edit a Plan](../../doc/controllers/platform-admin.md#edit-a-plan)
* [Get All Platform Wallets](../../doc/controllers/platform-admin.md#get-all-platform-wallets)


# Get All the Available Networks

Get all the available networks

```ts
async getAllTheAvailableNetworks(
  requestOptions?: RequestOptions
): Promise<ApiResponse<Network[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Network[]`](../../doc/models/network.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await platformAdminController.getAllTheAvailableNetworks();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Network

Create a new network

```ts
async createANewNetwork(
  body?: Network,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Network>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Network \| undefined`](../../doc/models/network.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Network`](../../doc/models/network.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await platformAdminController.createANewNetwork();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a Specific Network

Get a specific network

```ts
async getASpecificNetwork(
  networkId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Network>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkId` | `number` | Template, Required | **Constraints**: `>= 0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Network`](../../doc/models/network.md)

## Example Usage

```ts
const networkId = 129.56;
const contentType = null;
try {
  const { result, ...httpResponse } = await platformAdminController.getASpecificNetwork(networkId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Edit a Specific Network

Edit a specific network

```ts
async editASpecificNetwork(
  networkId: number,
  body?: EditNetworkData,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Network>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkId` | `number` | Template, Required | **Constraints**: `>= 0` |
| `body` | [`EditNetworkData \| undefined`](../../doc/models/edit-network-data.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Network`](../../doc/models/network.md)

## Example Usage

```ts
const networkId = 129.56;
const contentType = null;
try {
  const { result, ...httpResponse } = await platformAdminController.editASpecificNetwork(networkId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Organization

Create a new organization

```ts
async createANewOrganization(
  body?: CreateOrganizationInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrganizationSchemaV2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateOrganizationInput \| undefined`](../../doc/models/create-organization-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrganizationSchemaV2`](../../doc/models/organization-schema-v2.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await platformAdminController.createANewOrganization();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Subscribe Organization to a Plan

Subscribe organization to a plan

```ts
async subscribeOrganizationToAPlan(
  orgId: string,
  body?: SetPlanSubscriptionData,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SetPlanSubscriptionOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `body` | [`SetPlanSubscriptionData \| undefined`](../../doc/models/set-plan-subscription-data.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SetPlanSubscriptionOutput`](../../doc/models/set-plan-subscription-output.md)

## Example Usage

```ts
const orgId = '00000ec8-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await platformAdminController.subscribeOrganizationToAPlan(orgId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Plan

Create a new plan

```ts
async createANewPlan(
  body?: CreatePlanInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlanOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatePlanInput \| undefined`](../../doc/models/create-plan-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PlanOutput`](../../doc/models/plan-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await platformAdminController.createANewPlan();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Edit a Plan

Edit a plan

```ts
async editAPlan(
  planId: string,
  body?: EditPlanData,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlanOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planId` | `string` | Template, Required | - |
| `body` | [`EditPlanData \| undefined`](../../doc/models/edit-plan-data.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PlanOutput`](../../doc/models/plan-output.md)

## Example Usage

```ts
const planId = '00000940-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await platformAdminController.editAPlan(planId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Platform Wallets

Get all platform wallets

```ts
async getAllPlatformWallets(
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlatformWallet[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PlatformWallet[]`](../../doc/models/platform-wallet.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await platformAdminController.getAllPlatformWallets();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

