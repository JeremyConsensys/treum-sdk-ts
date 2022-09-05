
# User V2 Output

## Structure

`UserV2Output`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `active` | `boolean` | Required | - |
| `email` | `string` | Required | - |
| `id` | `string` | Required | - |
| `isManagedAccount` | `boolean` | Required | - |
| `lastLogin` | `string \| undefined` | Optional | - |
| `lastSeen` | `string \| undefined` | Optional | - |
| `organization` | [`Organization \| undefined`](../../doc/models/organization.md) | Optional | - |
| `organizationId` | `string` | Required | - |
| `permissions` | `string[]` | Required | - |
| `publicKey` | `string` | Required | ChecksumAddress |
| `roleId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "active": false,
  "email": "email6",
  "id": "00001770-0000-0000-0000-000000000000",
  "is_managed_account": false,
  "last_login": null,
  "last_seen": null,
  "organization": null,
  "organization_id": "00002684-0000-0000-0000-000000000000",
  "permissions": [
    "permissions7",
    "permissions8"
  ],
  "public_key": "public_key6",
  "role_id": "000010c8-0000-0000-0000-000000000000"
}
```

