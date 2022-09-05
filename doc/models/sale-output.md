
# Sale Output

## Structure

`SaleOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | - |
| `id` | `string` | Required | - |
| `itemId` | `string` | Required | - |
| `listingType` | [`ListingTypeEnum`](../../doc/models/listing-type-enum.md) | Required | - |
| `providerDetails` | `Record<string, unknown> \| null` | Required | - |
| `quantity` | `number` | Required | - |
| `recipient` | `string` | Required | - |
| `recipientType` | [`RecipientTypeEnum`](../../doc/models/recipient-type-enum.md) | Required | - |
| `saleAmount` | `string` | Required | - |
| `timestamp` | `string` | Required | - |
| `txHash` | `string` | Required | - |

## Example (as JSON)

```json
{
  "currency": "currency0",
  "id": "00001770-0000-0000-0000-000000000000",
  "item_id": "00000bcc-0000-0000-0000-000000000000",
  "listing_type": "FIAT_SET_PRICE",
  "provider_details": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "quantity": 68,
  "recipient": "recipient8",
  "recipient_type": "OTHER",
  "sale_amount": "sale_amount2",
  "timestamp": "2016-03-13T12:52:32.123Z",
  "tx_hash": "tx_hash2"
}
```

