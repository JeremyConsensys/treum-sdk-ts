
# Config

## Structure

`Config`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `autoDeploy` | `boolean` | Required | - |
| `autoFundAmount` | `string` | Required | SafeString |
| `confirmations` | `number` | Required | Uint<br>**Constraints**: `>= 0` |
| `eip155` | `boolean` | Required | - |
| `gasStrategy` | `Record<string, unknown> \| null` | Required | - |
| `maxConcurrentTxs` | `number` | Required | Uint<br>**Constraints**: `>= 0` |
| `poa` | `boolean` | Required | - |
| `txResubmitBlockCount` | `number \| undefined` | Optional | Uint<br>**Constraints**: `>= 0` |
| `url` | `string` | Required | SafeString |

## Example (as JSON)

```json
{
  "autoDeploy": false,
  "autoFundAmount": "autoFundAmount8",
  "confirmations": 108.38,
  "eip155": false,
  "gasStrategy": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "maxConcurrentTxs": 29.7,
  "poa": false,
  "txResubmitBlockCount": null,
  "url": "url4"
}
```

