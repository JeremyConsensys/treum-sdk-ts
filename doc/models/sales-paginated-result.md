
# Sales Paginated Result

## Structure

`SalesPaginatedResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | - |
| `hasMore` | `boolean` | Required | - |
| `results` | [`SaleOutput[]`](../../doc/models/sale-output.md) | Required | - |
| `totalResults` | `number` | Required | - |

## Example (as JSON)

```json
{
  "cursor": null,
  "has_more": false,
  "results": [
    {
      "currency": "currency7",
      "id": "00000a0d-0000-0000-0000-000000000000",
      "item_id": "0000192f-0000-0000-0000-000000000000",
      "listing_type": "DEFAULT",
      "provider_details": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "quantity": 241,
      "recipient": "recipient5",
      "recipient_type": "OTHER",
      "sale_amount": "sale_amount9",
      "timestamp": "2016-03-13T12:52:32.123Z",
      "tx_hash": "tx_hash9"
    }
  ],
  "total_results": 144
}
```

