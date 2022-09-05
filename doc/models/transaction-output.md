
# Transaction Output

## Structure

`TransactionOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdAt` | `string` | Required | - |
| `data` | `Record<string, unknown> \| null` | Required | - |
| `failureCount` | `number` | Required | - |
| `id` | `string` | Required | - |
| `networkId` | `number` | Required | - |
| `nonce` | `number` | Required | - |
| `onChainStatus` | [`OnChainStatusEnum`](../../doc/models/on-chain-status-enum.md) | Required | - |
| `signer` | `string` | Required | - |
| `state` | [`StateEnum`](../../doc/models/state-enum.md) | Required | - |
| `txHash` | `string` | Required | - |
| `txType` | [`TxTypeEnum`](../../doc/models/tx-type-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "created_at": "2016-03-13T12:52:32.123Z",
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "failure_count": 200,
  "id": "00001770-0000-0000-0000-000000000000",
  "network_id": 156,
  "nonce": 150,
  "on_chain_status": "FAILURE",
  "signer": "signer0",
  "state": "PENDING",
  "tx_hash": "tx_hash2",
  "tx_type": "SET_PER_TOKEN_ROYALTY"
}
```

