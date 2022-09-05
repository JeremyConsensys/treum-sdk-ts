# Org Admin

```ts
const orgAdminController = new OrgAdminController(client);
```

## Class Name

`OrgAdminController`

## Methods

* [Sign a Bid -- description Organization Admins Will Call This Endpoint to Sign a Bidder S Bid Only Signed Bids Are Valid in Restricted Auctions](../../doc/controllers/org-admin.md#sign-a-bid----description-organization-admins-will-call-this-endpoint-to-sign-a-bidder-s-bid-only-signed-bids-are-valid-in-restricted-auctions)
* [Gets All Item Types for the Organization of a Specific Organization ID If Supplied or the Calling User](../../doc/controllers/org-admin.md#gets-all-item-types-for-the-organization-of-a-specific-organization-id-if-supplied-or-the-calling-user)
* [Create a New Item Type for an Organization](../../doc/controllers/org-admin.md#create-a-new-item-type-for-an-organization)
* [Get the Meta Schema Example Which Is Used to Validate an Item Type Schema](../../doc/controllers/org-admin.md#get-the-meta-schema-example-which-is-used-to-validate-an-item-type-schema)
* [Delete a Specific Item Type](../../doc/controllers/org-admin.md#delete-a-specific-item-type)
* [Get a Specific Item Type for an Organization](../../doc/controllers/org-admin.md#get-a-specific-item-type-for-an-organization)
* [Edits an Existing Item Type for an Organization](../../doc/controllers/org-admin.md#edits-an-existing-item-type-for-an-organization)
* [Get All Customizable Email Templates](../../doc/controllers/org-admin.md#get-all-customizable-email-templates)
* [Get All Customizable Email Template Types](../../doc/controllers/org-admin.md#get-all-customizable-email-template-types)
* [Delete a Specific Email Template](../../doc/controllers/org-admin.md#delete-a-specific-email-template)
* [Gets a Specific Customizable Email Template](../../doc/controllers/org-admin.md#gets-a-specific-customizable-email-template)
* [Update a Specific Email Template](../../doc/controllers/org-admin.md#update-a-specific-email-template)
* [Create a New Email Template](../../doc/controllers/org-admin.md#create-a-new-email-template)
* [Creates and Sends a New Test Mail](../../doc/controllers/org-admin.md#creates-and-sends-a-new-test-mail)
* [Get All Variables for a Specific Template](../../doc/controllers/org-admin.md#get-all-variables-for-a-specific-template)
* [Get All Organizations the Current User Has Access To](../../doc/controllers/org-admin.md#get-all-organizations-the-current-user-has-access-to)
* [Get Organization by Id](../../doc/controllers/org-admin.md#get-organization-by-id)
* [Edit an Organization](../../doc/controllers/org-admin.md#edit-an-organization)
* [Get Platform Stripe Accounts by Org](../../doc/controllers/org-admin.md#get-platform-stripe-accounts-by-org)
* [Associate or Dissociate Platform Stripe Accounts by Organization](../../doc/controllers/org-admin.md#associate-or-dissociate-platform-stripe-accounts-by-organization)
* [Get the Current Plan](../../doc/controllers/org-admin.md#get-the-current-plan)
* [Get All Organization Wallets](../../doc/controllers/org-admin.md#get-all-organization-wallets)
* [Create Organization Wallet](../../doc/controllers/org-admin.md#create-organization-wallet)
* [Delete Organization Wallet](../../doc/controllers/org-admin.md#delete-organization-wallet)
* [Get Integrated Payment Provider Accounts](../../doc/controllers/org-admin.md#get-integrated-payment-provider-accounts)
* [Disconnect the Organization S Coinbase Commerce Account](../../doc/controllers/org-admin.md#disconnect-the-organization-s-coinbase-commerce-account)
* [Setup an Organization S Coinbase Commerce Account](../../doc/controllers/org-admin.md#setup-an-organization-s-coinbase-commerce-account)
* [Edit an Organization S Coinbase Commerce Account](../../doc/controllers/org-admin.md#edit-an-organization-s-coinbase-commerce-account)
* [Returns All Platform Stripe Accounts for This Organization](../../doc/controllers/org-admin.md#returns-all-platform-stripe-accounts-for-this-organization)
* [Query the Stripe Integration for This Org and Update Setup Complete Accordingly If Card Payments Enabled](../../doc/controllers/org-admin.md#query-the-stripe-integration-for-this-org-and-update-setup-complete-accordingly-if-card-payments-enabled)
* [Get Stripe Connect Types by Organization](../../doc/controllers/org-admin.md#get-stripe-connect-types-by-organization)
* [Get All Plans](../../doc/controllers/org-admin.md#get-all-plans)
* [Get All Available Roles](../../doc/controllers/org-admin.md#get-all-available-roles)
* [Get All Users for the Current Organization](../../doc/controllers/org-admin.md#get-all-users-for-the-current-organization)
* [Create a New User](../../doc/controllers/org-admin.md#create-a-new-user)
* [Delete User by Id](../../doc/controllers/org-admin.md#delete-user-by-id)
* [Get a User by Id](../../doc/controllers/org-admin.md#get-a-user-by-id)
* [Edit a User](../../doc/controllers/org-admin.md#edit-a-user)


# Sign a Bid -- description Organization Admins Will Call This Endpoint to Sign a Bidder S Bid Only Signed Bids Are Valid in Restricted Auctions

## Sign a bid

description: |
Organization admins will call this endpoint to sign a bidder's bid. Only signed bids are valid in restricted auctions.

```ts
async signABidDescriptionOrganizationAdminsWillCallThisEndpointToSignABidderSBidOnlySignedBidsAreValidInRestrictedAuctions(
  body?: RestrictedSignatureRequestInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RestrictedSignatureRequestOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RestrictedSignatureRequestInput \| undefined`](../../doc/models/restricted-signature-request-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RestrictedSignatureRequestOutput`](../../doc/models/restricted-signature-request-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.signABidDescriptionOrganizationAdminsWillCallThisEndpointToSignABidderSBidOnlySignedBidsAreValidInRestrictedAuctions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Gets All Item Types for the Organization of a Specific Organization ID If Supplied or the Calling User

Only organization or platform admins have access to this data.
If no organization ID is supplied, platform admins will get all item types.
If no organization ID is supplied, an org admin will get the item types of his organization.

```ts
async getsAllItemTypesForTheOrganizationOfASpecificOrganizationIDIfSuppliedOrTheCallingUser(
  organizationId?: string,
  cursor?: string,
  limit?: number,
  orderBy?: OrderBy9Enum,
  orderDirection?: OrderDirection9Enum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ItemTypesPaginatedResult>>
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

[`ItemTypesPaginatedResult`](../../doc/models/item-types-paginated-result.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getsAllItemTypesForTheOrganizationOfASpecificOrganizationIDIfSuppliedOrTheCallingUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Item Type for an Organization

If not supplied, the organization of the requesting user is used.

```ts
async createANewItemTypeForAnOrganization(
  body?: CreateItemTypeEndpointBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ItemTypeDomainModel>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateItemTypeEndpointBody \| undefined`](../../doc/models/create-item-type-endpoint-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ItemTypeDomainModel`](../../doc/models/item-type-domain-model.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.createANewItemTypeForAnOrganization();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get the Meta Schema Example Which Is Used to Validate an Item Type Schema

Only organization or platform admins have access to this data.

```ts
async getTheMetaSchemaExampleWhichIsUsedToValidateAnItemTypeSchema(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ItemTypeMetaSchema>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ItemTypeMetaSchema`](../../doc/models/item-type-meta-schema.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getTheMetaSchemaExampleWhichIsUsedToValidateAnItemTypeSchema();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Specific Item Type

Only following item types can be deleted:

- Specific to your organization.
- Not associated with an item and/or collection.

```ts
async deleteASpecificItemType(
  itemTypeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemTypeId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const itemTypeId = '00001bea-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.deleteASpecificItemType(itemTypeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a Specific Item Type for an Organization

Get a specific item type for an organization.

```ts
async getASpecificItemTypeForAnOrganization(
  itemTypeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ItemTypeDomainModel>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemTypeId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ItemTypeDomainModel`](../../doc/models/item-type-domain-model.md)

## Example Usage

```ts
const itemTypeId = '00001bea-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getASpecificItemTypeForAnOrganization(itemTypeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Edits an Existing Item Type for an Organization

Edits an existing item type for an organization.

```ts
async editsAnExistingItemTypeForAnOrganization(
  itemTypeId: string,
  body?: EditItemTypeEndpointBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ItemTypeDomainModel>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemTypeId` | `string` | Template, Required | - |
| `body` | [`EditItemTypeEndpointBody \| undefined`](../../doc/models/edit-item-type-endpoint-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ItemTypeDomainModel`](../../doc/models/item-type-domain-model.md)

## Example Usage

```ts
const itemTypeId = '00001bea-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.editsAnExistingItemTypeForAnOrganization(itemTypeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Customizable Email Templates

A template for each **customizable** template type will be retrieved for:

* An organization, which is derived from the authorized user.

Every template type with no custom template for the organization will return the platform default.

```ts
async getAllCustomizableEmailTemplates(
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrganizationEmailTemplateDomainModel[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrganizationEmailTemplateDomainModel[]`](../../doc/models/organization-email-template-domain-model.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getAllCustomizableEmailTemplates();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Customizable Email Template Types

Organization admins will only be able to customize templates that match these types.

```ts
async getAllCustomizableEmailTemplateTypes(
  requestOptions?: RequestOptions
): Promise<ApiResponse<string[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string[]`

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getAllCustomizableEmailTemplateTypes();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Specific Email Template

The template that will be deleted will be identified by:

* An organization, which is derived from the authorized user.
* A **customizable** template type, which is passed in via the URL path.

After the delete, the platform default will be used by the organization.

```ts
async deleteASpecificEmailTemplate(
  templateType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateType` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const templateType = 'template_type0';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.deleteASpecificEmailTemplate(templateType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Gets a Specific Customizable Email Template

The template will be retrieved for:

* An organization, which is derived from the authorized user.
* A **customizable** template type, which is passed in via the URL path.

If no template was found, the platform default will be returned.

```ts
async getsASpecificCustomizableEmailTemplate(
  templateType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrganizationEmailTemplateDomainModel>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateType` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrganizationEmailTemplateDomainModel`](../../doc/models/organization-email-template-domain-model.md)

## Example Usage

```ts
const templateType = 'template_type0';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getsASpecificCustomizableEmailTemplate(templateType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Specific Email Template

The template that will be updated will be identified by:

* An organization, which is derived from the authorized user.
* A **customizable** template type, which is passed in via the URL path.

```ts
async updateASpecificEmailTemplate(
  templateType: string,
  body?: EditOrganizationEmailTemplateBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrganizationEmailTemplateDomainModel>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateType` | `string` | Template, Required | - |
| `body` | [`EditOrganizationEmailTemplateBody \| undefined`](../../doc/models/edit-organization-email-template-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrganizationEmailTemplateDomainModel`](../../doc/models/organization-email-template-domain-model.md)

## Example Usage

```ts
const templateType = 'template_type0';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.updateASpecificEmailTemplate(templateType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Email Template

The template type that is specified should be considered **customizable** by the platform.

```ts
async createANewEmailTemplate(
  templateType: string,
  body?: CreateOrganizationEmailTemplateBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrganizationEmailTemplateDomainModel>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateType` | `string` | Template, Required | - |
| `body` | [`CreateOrganizationEmailTemplateBody \| undefined`](../../doc/models/create-organization-email-template-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrganizationEmailTemplateDomainModel`](../../doc/models/organization-email-template-domain-model.md)

## Example Usage

```ts
const templateType = 'template_type0';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.createANewEmailTemplate(templateType);
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

If no email variable is specified, the mail will be sent to the authorized user.
The template type that is specified should be considered **customizable** by the platform.

```ts
async createsAndSendsANewTestMail(
  templateType: string,
  body?: CreateOrganizationEmailTemplateTestMailBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateType` | `string` | Template, Required | - |
| `body` | [`CreateOrganizationEmailTemplateTestMailBody \| undefined`](../../doc/models/create-organization-email-template-test-mail-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const templateType = 'template_type0';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.createsAndSendsANewTestMail(templateType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Variables for a Specific Template

Variables are derived from the platform default.

Variables used in templates should be wrapped in double curly brackets.

```ts
async getAllVariablesForASpecificTemplate(
  templateType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrganizationEmailTemplateVariable[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateType` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrganizationEmailTemplateVariable[]`](../../doc/models/organization-email-template-variable.md)

## Example Usage

```ts
const templateType = 'template_type0';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getAllVariablesForASpecificTemplate(templateType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Organizations the Current User Has Access To

This will be a list of 1 for everyone except platform admins.

```ts
async getAllOrganizationsTheCurrentUserHasAccessTo(
  include?: IncludeEnum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrganizationSchemaV2[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `include` | [`IncludeEnum[] \| undefined`](../../doc/models/include-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrganizationSchemaV2[]`](../../doc/models/organization-schema-v2.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getAllOrganizationsTheCurrentUserHasAccessTo();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Organization by Id

The user must have access to the desired org.

```ts
async getOrganizationById(
  orgId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrganizationSchemaV2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrganizationSchemaV2`](../../doc/models/organization-schema-v2.md)

## Example Usage

```ts
const orgId = '00000ec8-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getOrganizationById(orgId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Edit an Organization

Most fields are only editable by a platform admin.

```ts
async editAnOrganization(
  orgId: string,
  body?: EditOrganizationData,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrganizationSchemaV2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `body` | [`EditOrganizationData \| undefined`](../../doc/models/edit-organization-data.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrganizationSchemaV2`](../../doc/models/organization-schema-v2.md)

## Example Usage

```ts
const orgId = '00000ec8-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.editAnOrganization(orgId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Platform Stripe Accounts by Org

Get platform stripe accounts by org

```ts
async getPlatformStripeAccountsByOrg(
  orgId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicPlatformStripeAccountOutput[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicPlatformStripeAccountOutput[]`](../../doc/models/public-platform-stripe-account-output.md)

## Example Usage

```ts
const orgId = '00000ec8-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getPlatformStripeAccountsByOrg(orgId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Associate or Dissociate Platform Stripe Accounts by Organization

Associate or dissociate platform stripe accounts by organization

```ts
async associateOrDissociatePlatformStripeAccountsByOrganization(
  orgId: string,
  platformStripeAccountId: string,
  body?: UpdateOrganizationPlatformStripeAccountData,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicPlatformStripeAccountOutput[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `platformStripeAccountId` | `string` | Template, Required | - |
| `body` | [`UpdateOrganizationPlatformStripeAccountData \| undefined`](../../doc/models/update-organization-platform-stripe-account-data.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicPlatformStripeAccountOutput[]`](../../doc/models/public-platform-stripe-account-output.md)

## Example Usage

```ts
const orgId = '00000ec8-0000-0000-0000-000000000000';
const platformStripeAccountId = '000005d6-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.associateOrDissociatePlatformStripeAccountsByOrganization(orgId, platformStripeAccountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get the Current Plan

Get the current plan

```ts
async getTheCurrentPlan(
  orgId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPlanSubscriptionOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPlanSubscriptionOutput`](../../doc/models/get-plan-subscription-output.md)

## Example Usage

```ts
const orgId = '00000ec8-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getTheCurrentPlan(orgId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Organization Wallets

Get all organization wallets

```ts
async getAllOrganizationWallets(
  orgId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrganizationWallet[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrganizationWallet[]`](../../doc/models/organization-wallet.md)

## Example Usage

```ts
const orgId = '00000ec8-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getAllOrganizationWallets(orgId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Organization Wallet

Create organization wallet

```ts
async createOrganizationWallet(
  orgId: string,
  body?: CreateOrgWalletInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrganizationWallet>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `body` | [`CreateOrgWalletInput \| undefined`](../../doc/models/create-org-wallet-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrganizationWallet`](../../doc/models/organization-wallet.md)

## Example Usage

```ts
const orgId = '00000ec8-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.createOrganizationWallet(orgId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Organization Wallet

Delete organization wallet

```ts
async deleteOrganizationWallet(
  orgId: string,
  walletId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orgId` | `string` | Template, Required | - |
| `walletId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const orgId = '00000ec8-0000-0000-0000-000000000000';
const walletId = '00000398-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.deleteOrganizationWallet(orgId, walletId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Integrated Payment Provider Accounts

Get integrated payment provider accounts

```ts
async getIntegratedPaymentProviderAccounts(
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentIntegrations>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentIntegrations`](../../doc/models/payment-integrations.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getIntegratedPaymentProviderAccounts();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Disconnect the Organization S Coinbase Commerce Account

Disconnect the organization's coinbase commerce account

```ts
async disconnectTheOrganizationSCoinbaseCommerceAccount(
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
  const { result, ...httpResponse } = await orgAdminController.disconnectTheOrganizationSCoinbaseCommerceAccount();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Setup an Organization S Coinbase Commerce Account

Setup an organization's coinbase commerce account

```ts
async setupAnOrganizationSCoinbaseCommerceAccount(
  body?: CoinbaseCommerceIntegrationInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CoinbaseCommerceIntegrationInput \| undefined`](../../doc/models/coinbase-commerce-integration-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.setupAnOrganizationSCoinbaseCommerceAccount();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Edit an Organization S Coinbase Commerce Account

Edit an organization's coinbase commerce account

```ts
async editAnOrganizationSCoinbaseCommerceAccount(
  integrationId: string,
  body?: CoinbaseCommerceIntegrationInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `integrationId` | `string` | Template, Required | - |
| `body` | [`CoinbaseCommerceIntegrationInput \| undefined`](../../doc/models/coinbase-commerce-integration-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const integrationId = '000014ac-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.editAnOrganizationSCoinbaseCommerceAccount(integrationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Returns All Platform Stripe Accounts for This Organization

Returns all PlatformStripeAccounts for this organization

```ts
async returnsAllPlatformStripeAccountsForThisOrganization(
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicPlatformStripeAccountOutput[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicPlatformStripeAccountOutput[]`](../../doc/models/public-platform-stripe-account-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.returnsAllPlatformStripeAccountsForThisOrganization();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Query the Stripe Integration for This Org and Update Setup Complete Accordingly If Card Payments Enabled

Query the stripe integration for this org and update setup_complete accordingly if card_payments enabled

```ts
async queryTheStripeIntegrationForThisOrgAndUpdateSetupCompleteAccordinglyIfCardPaymentsEnabled(
  requestOptions?: RequestOptions
): Promise<ApiResponse<StripeIntegrationOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StripeIntegrationOutput`](../../doc/models/stripe-integration-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.queryTheStripeIntegrationForThisOrgAndUpdateSetupCompleteAccordinglyIfCardPaymentsEnabled();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Stripe Connect Types by Organization

Get stripe connect types by organization

```ts
async getStripeConnectTypesByOrganization(
  requestOptions?: RequestOptions
): Promise<ApiResponse<StripeConnectOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StripeConnectOutput`](../../doc/models/stripe-connect-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getStripeConnectTypesByOrganization();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Plans

Get all plans

```ts
async getAllPlans(
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlanOutput[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PlanOutput[]`](../../doc/models/plan-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getAllPlans();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Available Roles

Get all available roles

```ts
async getAllAvailableRoles(
  requestOptions?: RequestOptions
): Promise<ApiResponse<RoleSchemaV2[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RoleSchemaV2[]`](../../doc/models/role-schema-v2.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getAllAvailableRoles();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Users for the Current Organization

Get all users for the current organization

```ts
async getAllUsersForTheCurrentOrganization(
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserV2Output[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserV2Output[]`](../../doc/models/user-v2-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getAllUsersForTheCurrentOrganization();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New User

Create a new user

```ts
async createANewUser(
  body?: CreateUserInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserV2Output>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateUserInput \| undefined`](../../doc/models/create-user-input.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserV2Output`](../../doc/models/user-v2-output.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.createANewUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete User by Id

Delete user by id

```ts
async deleteUserById(
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
  const { result, ...httpResponse } = await orgAdminController.deleteUserById(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a User by Id

Get a user by id

```ts
async getAUserById(
  userId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserV2Output>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserV2Output`](../../doc/models/user-v2-output.md)

## Example Usage

```ts
const userId = '00001e80-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.getAUserById(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Edit a User

Edit a user

```ts
async editAUser(
  userId: string,
  body?: EditUserData,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserV2Output>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `body` | [`EditUserData \| undefined`](../../doc/models/edit-user-data.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserV2Output`](../../doc/models/user-v2-output.md)

## Example Usage

```ts
const userId = '00001e80-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await orgAdminController.editAUser(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

