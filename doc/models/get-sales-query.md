
# Get Sales Query

## Structure

`GetSalesQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionId` | `string[]` | Required | - |
| `cursor` | `string \| undefined` | Optional | SafeString |
| `itemId` | `string[]` | Required | - |
| `limit` | `number \| undefined` | Optional | Uint<br>**Constraints**: `>= 0` |
| `listingType` | [`ListingTypeEnum[]`](../../doc/models/listing-type-enum.md) | Required | - |
| `orderBy` | [`OrderBy3Enum \| undefined`](../../doc/models/order-by-3-enum.md) | Optional | - |
| `orderDirection` | [`OrderDirection1Enum \| undefined`](../../doc/models/order-direction-1-enum.md) | Optional | - |
| `recipientType` | [`RecipientTypeEnum \| undefined`](../../doc/models/recipient-type-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "collection_id": [
    "0000270e-0000-0000-0000-000000000000"
  ],
  "cursor": null,
  "item_id": [
    "0000196e-0000-0000-0000-000000000000",
    "0000196f-0000-0000-0000-000000000000",
    "00001970-0000-0000-0000-000000000000"
  ],
  "limit": null,
  "listing_type": [
    "BUYER_MINT",
    "FIAT_LAZY_MINT",
    "DEFAULT"
  ],
  "order_by": null,
  "order_direction": null,
  "recipient_type": null
}
```

