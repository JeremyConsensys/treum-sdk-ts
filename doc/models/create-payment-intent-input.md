
# Create Payment Intent Input

## Structure

`CreatePaymentIntentInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `buyer` | [`Buyer`](../../doc/models/buyer.md) | Required | - |
| `listingId` | `string` | Required | - |
| `provider` | [`ProviderEnum`](../../doc/models/provider-enum.md) | Required | - |
| `quantity` | `number` | Required | - |

## Example (as JSON)

```json
{
  "buyer": {
    "email": null,
    "eth_address": null
  },
  "listing_id": "00000a76-0000-0000-0000-000000000000",
  "provider": "STRIPE",
  "quantity": 68
}
```

