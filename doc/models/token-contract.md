
# Token Contract

## Structure

`TokenContract`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string \| undefined` | Optional | ChecksumAddress |
| `capabilities` | [`CapabilityEnum[]`](../../doc/models/capability-enum.md) | Required | - |
| `deployTxId` | `string \| undefined` | Optional | - |
| `networkId` | `number` | Required | - |
| `symbol` | `string` | Required | - |
| `tokenType` | [`TokenTypeEnum`](../../doc/models/token-type-enum.md) | Required | - |
| `txHash` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "address": null,
  "capabilities": [
    "CREATE_WALLETPOOL_PROXY"
  ],
  "deploy_tx_id": null,
  "network_id": 156,
  "symbol": "symbol8",
  "token_type": "ERC721",
  "tx_hash": null
}
```

