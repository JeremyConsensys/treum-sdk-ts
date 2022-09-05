
# Product Response

## Structure

`ProductResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `canCreateItems` | `boolean` | Required | - |
| `code` | `string \| undefined` | Optional | - |
| `createdAt` | `string` | Required | - |
| `defaultItemTypeId` | `string \| undefined` | Optional | - |
| `id` | `string` | Required | - |
| `imageUrl` | `string \| undefined` | Optional | - |
| `isPublic` | `boolean` | Required | - |
| `locked` | `boolean` | Required | - |
| `metaData` | `Record<string, unknown> \| undefined` | Optional | - |
| `name` | `string` | Required | - |
| `organizationId` | `string` | Required | - |
| `royaltyInfo` | [`RoyaltyInfo \| undefined`](../../doc/models/royalty-info.md) | Optional | - |
| `tags` | `string[] \| undefined` | Optional | - |
| `tokenAssignmentStrategy` | [`TokenAssignmentStrategyEnum \| undefined`](../../doc/models/token-assignment-strategy-enum.md) | Optional | - |
| `tokenContract` | [`TokenContract \| undefined`](../../doc/models/token-contract.md) | Optional | - |
| `updatedAt` | `string` | Required | - |
| `walletpool` | [`WalletPoolOutput \| undefined`](../../doc/models/wallet-pool-output.md) | Optional | - |

## Example (as JSON)

```json
{
  "can_create_items": false,
  "code": null,
  "created_at": "2016-03-13T12:52:32.123Z",
  "default_item_type_id": null,
  "id": "00001770-0000-0000-0000-000000000000",
  "image_url": null,
  "is_public": false,
  "locked": false,
  "meta_data": null,
  "name": "name0",
  "organization_id": "organization_id0",
  "royalty_info": null,
  "tags": null,
  "token_assignment_strategy": null,
  "token_contract": null,
  "updated_at": "2016-03-13T12:52:32.123Z",
  "walletpool": null
}
```

