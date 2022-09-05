
# Get Email Claims Query

## Structure

`GetEmailClaimsQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `active` | `boolean \| undefined` | Optional | - |
| `claimed` | `boolean \| undefined` | Optional | - |
| `collectionId` | `string[]` | Required | - |
| `cursor` | `string \| undefined` | Optional | SafeString |
| `email` | `string \| undefined` | Optional | SafeString |
| `itemId` | `string[]` | Required | - |
| `limit` | `number \| undefined` | Optional | Uint<br>**Constraints**: `>= 0` |
| `orderBy` | [`OrderByEnum \| undefined`](../../doc/models/order-by-enum.md) | Optional | - |
| `orderDirection` | [`OrderDirection1Enum \| undefined`](../../doc/models/order-direction-1-enum.md) | Optional | - |
| `tokenId` | `string[]` | Required | - |

## Example (as JSON)

```json
{
  "active": null,
  "claimed": null,
  "collection_id": [
    "0000270e-0000-0000-0000-000000000000"
  ],
  "cursor": null,
  "email": null,
  "item_id": [
    "0000196e-0000-0000-0000-000000000000",
    "0000196f-0000-0000-0000-000000000000",
    "00001970-0000-0000-0000-000000000000"
  ],
  "limit": null,
  "order_by": null,
  "order_direction": null,
  "token_id": [
    "token_id3"
  ]
}
```

