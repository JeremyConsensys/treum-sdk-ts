
# Network

## Structure

`Network`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `config` | [`Config`](../../doc/models/config.md) | Required | - |
| `enabled` | `boolean` | Required | - |
| `id` | `number` | Required | Uint<br>**Constraints**: `>= 0` |
| `name` | `string` | Required | SafeString |
| `paymentTokens` | [`PaymentToken[] \| undefined`](../../doc/models/payment-token.md) | Optional | - |
| `testnet` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "config": {
    "autoDeploy": false,
    "autoFundAmount": "autoFundAmount4",
    "confirmations": 206.34,
    "eip155": false,
    "gasStrategy": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      },
      "key1": {
        "key1": "val1",
        "key2": "val2"
      },
      "key2": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "maxConcurrentTxs": 187.74,
    "poa": false,
    "txResubmitBlockCount": null,
    "url": "url0"
  },
  "enabled": false,
  "id": 60.0,
  "name": "name0",
  "payment_tokens": null,
  "testnet": false
}
```

