# Auth

```ts
const authController = new AuthController(client);
```

## Class Name

`AuthController`

## Methods

* [Get All API Keys for the Current User](../../doc/controllers/auth.md#get-all-api-keys-for-the-current-user)
* [Create a New API Key](../../doc/controllers/auth.md#create-a-new-api-key)
* [Delete an API Key](../../doc/controllers/auth.md#delete-an-api-key)
* [Get API Key by Id](../../doc/controllers/auth.md#get-api-key-by-id)
* [Change User Password](../../doc/controllers/auth.md#change-user-password)
* [Forgot User Password](../../doc/controllers/auth.md#forgot-user-password)
* [Log in User](../../doc/controllers/auth.md#log-in-user)
* [Logout User](../../doc/controllers/auth.md#logout-user)
* [Get the Current User](../../doc/controllers/auth.md#get-the-current-user)
* [Reset User Password](../../doc/controllers/auth.md#reset-user-password)
* [Resend Verification Email](../../doc/controllers/auth.md#resend-verification-email)
* [Verify User](../../doc/controllers/auth.md#verify-user)


# Get All API Keys for the Current User

Get all API keys for the current user

```ts
async getAllAPIKeysForTheCurrentUser(
  limit?: number,
  orderDirection?: OrderDirection8Enum,
  cursor?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiKeyPaginatedOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | PaginationLimit<br>**Default**: `100`<br>**Constraints**: `>= 1`, `<= 100` |
| `orderDirection` | [`OrderDirection8Enum \| undefined`](../../doc/models/order-direction-8-enum.md) | Query, Optional | **Default**: `OrderDirection8Enum.ASC` |
| `cursor` | `string \| undefined` | Query, Optional | SafeString |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiKeyPaginatedOutput`](../../doc/models/api-key-paginated-output.md)

## Example Usage

```ts
const contentType = null;
const limit = 237.24;
const orderDirection = 'ASC';
try {
  const { result, ...httpResponse } = await authController.getAllAPIKeysForTheCurrentUser(limit, orderDirection);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New API Key

Create a new API key

```ts
async createANewAPIKey(
  body?: CreateApiKeyBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiKeyCreatedOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateApiKeyBody \| undefined`](../../doc/models/create-api-key-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiKeyCreatedOutput`](../../doc/models/api-key-created-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await authController.createANewAPIKey();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete an API Key

Delete an API key

```ts
async deleteAnAPIKey(
  apiKeyId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKeyId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const apiKeyId = '000009a0-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await authController.deleteAnAPIKey(apiKeyId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get API Key by Id

Get API key by id

```ts
async getAPIKeyById(
  apiKeyId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiKeyOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKeyId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiKeyOutput`](../../doc/models/api-key-output.md)

## Example Usage

```ts
const apiKeyId = '000009a0-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await authController.getAPIKeyById(apiKeyId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Change User Password

Change user password

```ts
async changeUserPassword(
  body?: ChangePasswordInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ChangePasswordInput \| undefined`](../../doc/models/change-password-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginResponse`](../../doc/models/login-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await authController.changeUserPassword();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Forgot User Password

For a registered user, this sends a token to the email address which can be used to reset the password.  This endpoint is only applicable to users whose account currently contains a password, and cannot be used for web3 accounts.

```ts
async forgotUserPassword(
  body?: ForgotPasswordInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ForgotPasswordResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ForgotPasswordInput \| undefined`](../../doc/models/forgot-password-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ForgotPasswordResponse`](../../doc/models/forgot-password-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await authController.forgotUserPassword();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Log in User

Log in user

```ts
async logInUser(
  body?: Web2LoginInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Web2LoginInput \| undefined`](../../doc/models/web-2-login-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginResponse`](../../doc/models/login-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await authController.logInUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Logout User

Logout user

```ts
async logoutUser(
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
  const { result, ...httpResponse } = await authController.logoutUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get the Current User

Get the current user

```ts
async getTheCurrentUser(
  include?: Include1Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserV2Output>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `include` | [`Include1Enum[] \| undefined`](../../doc/models/include-1-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserV2Output`](../../doc/models/user-v2-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await authController.getTheCurrentUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Reset User Password

This resets the user's password from a token received in an email.

```ts
async resetUserPassword(
  body?: ResetPasswordUsingTokenInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ResetPasswordUsingTokenInput \| undefined`](../../doc/models/reset-password-using-token-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginResponse`](../../doc/models/login-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await authController.resetUserPassword();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Resend Verification Email

Resend verification email

```ts
async resendVerificationEmail(
  userId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = '00001e80-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await authController.resendVerificationEmail(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Verify User

This verifies the ownership of an email by sending the token received, along with the password to set for the account.

```ts
async verifyUser(
  body?: VerifyWeb2Input,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`VerifyWeb2Input \| undefined`](../../doc/models/verify-web-2-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginResponse`](../../doc/models/login-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await authController.verifyUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

