
# Payment Token

## Structure

`PaymentToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string` | Required | ChecksumAddress |
| `decimals` | `number` | Required | Uint<br>**Constraints**: `>= 0` |
| `symbol` | `string` | Required | SafeString |

## Example (as JSON)

```json
{
  "address": "address6",
  "decimals": 74.14,
  "symbol": "symbol8"
}
```

