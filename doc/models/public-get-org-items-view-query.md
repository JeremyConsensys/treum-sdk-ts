
# Public Get Org Items View Query

## Structure

`PublicGetOrgItemsViewQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attribute` | `string[]` | Required | - |
| `collectionId` | `string[]` | Required | - |
| `cursor` | `string \| undefined` | Optional | SafeString |
| `limit` | `number \| undefined` | Optional | Uint<br>**Constraints**: `>= 0` |
| `networkId` | `number[]` | Required | **Constraints**: `>= 0` |
| `orderBy` | [`OrderBy6Enum \| undefined`](../../doc/models/order-by-6-enum.md) | Optional | - |
| `orderDirection` | [`OrderDirection1Enum \| undefined`](../../doc/models/order-direction-1-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "attribute": [
    "attribute6"
  ],
  "collection_id": [
    "0000270e-0000-0000-0000-000000000000"
  ],
  "cursor": null,
  "limit": null,
  "network_id": [
    194.34,
    194.35,
    194.36
  ],
  "order_by": null,
  "order_direction": null
}
```

