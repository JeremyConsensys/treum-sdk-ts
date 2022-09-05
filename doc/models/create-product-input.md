
# Create Product Input

## Structure

`CreateProductInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | SafeString |
| `defaultItemTypeId` | `string \| undefined` | Optional | - |
| `imageUrl` | `string \| undefined` | Optional | SafeString |
| `isPublic` | `boolean \| undefined` | Optional | **Default**: `false` |
| `locked` | `boolean \| undefined` | Optional | **Default**: `false` |
| `metaData` | `Record<string, unknown> \| undefined` | Optional | - |
| `name` | `string` | Required | SafeString |
| `royaltyInfo` | [`RoyaltyInfo \| undefined`](../../doc/models/royalty-info.md) | Optional | - |
| `tags` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "code": null,
  "default_item_type_id": null,
  "image_url": null,
  "is_public": null,
  "locked": null,
  "meta_data": null,
  "name": "name0",
  "royalty_info": null,
  "tags": null
}
```

