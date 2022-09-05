# Webhooks

```ts
const webhooksController = new WebhooksController(client);
```

## Class Name

`WebhooksController`

## Methods

* [Send a Sample Webhook to the Given Url](../../doc/controllers/webhooks.md#send-a-sample-webhook-to-the-given-url)
* [Get All Webhooks for the Current Organization](../../doc/controllers/webhooks.md#get-all-webhooks-for-the-current-organization)
* [Create a New Webhook](../../doc/controllers/webhooks.md#create-a-new-webhook)
* [Delete a Webhook](../../doc/controllers/webhooks.md#delete-a-webhook)
* [Edit a Webhook](../../doc/controllers/webhooks.md#edit-a-webhook)


# Send a Sample Webhook to the Given Url

Send a sample webhook to the given url

```ts
async sendASampleWebhookToTheGivenUrl(
  body?: TestWebhookInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TestWebhookOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TestWebhookInput \| undefined`](../../doc/models/test-webhook-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TestWebhookOutput`](../../doc/models/test-webhook-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await webhooksController.sendASampleWebhookToTheGivenUrl();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Webhooks for the Current Organization

Get all webhooks for the current organization

```ts
async getAllWebhooksForTheCurrentOrganization(
  requestOptions?: RequestOptions
): Promise<ApiResponse<Webhook[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Webhook[]`](../../doc/models/webhook.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await webhooksController.getAllWebhooksForTheCurrentOrganization();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Webhook

Create a new webhook

```ts
async createANewWebhook(
  body?: WebhookInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Webhook>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WebhookInput \| undefined`](../../doc/models/webhook-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Webhook`](../../doc/models/webhook.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await webhooksController.createANewWebhook();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Webhook

Delete a webhook

```ts
async deleteAWebhook(
  webhookId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const webhookId = '00000dc6-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await webhooksController.deleteAWebhook(webhookId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Edit a Webhook

Edit a webhook

```ts
async editAWebhook(
  webhookId: string,
  body?: WebhookInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Webhook>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookId` | `string` | Template, Required | - |
| `body` | [`WebhookInput \| undefined`](../../doc/models/webhook-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Webhook`](../../doc/models/webhook.md)

## Example Usage

```ts
const webhookId = '00000dc6-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await webhooksController.editAWebhook(webhookId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

