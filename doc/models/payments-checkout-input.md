
# Payments Checkout Input

## Structure

`PaymentsCheckoutInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| undefined` | Optional | SafeString |
| `ethAddress` | `string \| undefined` | Optional | ChecksumAddress |
| `listingId` | `string` | Required | - |
| `quantity` | `number` | Required | - |

## Example (as JSON)

```json
{
  "email": null,
  "eth_address": null,
  "listing_id": "00000a76-0000-0000-0000-000000000000",
  "quantity": 68
}
```

