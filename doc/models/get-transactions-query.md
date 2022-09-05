
# Get Transactions Query

## Structure

`GetTransactionsQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | SafeString |
| `limit` | `number \| undefined` | Optional | Uint<br>**Constraints**: `>= 0` |
| `networkId` | `number[]` | Required | **Constraints**: `>= 0` |
| `orderBy` | [`OrderBy4Enum \| undefined`](../../doc/models/order-by-4-enum.md) | Optional | - |
| `orderDirection` | [`OrderDirection1Enum \| undefined`](../../doc/models/order-direction-1-enum.md) | Optional | - |
| `signer` | `string[]` | Required | - |
| `state` | [`StateEnum[]`](../../doc/models/state-enum.md) | Required | - |
| `txType` | [`TxTypeEnum[]`](../../doc/models/tx-type-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "cursor": null,
  "limit": null,
  "network_id": [
    194.34,
    194.35,
    194.36
  ],
  "order_by": null,
  "order_direction": null,
  "signer": [
    "signer5",
    "signer6"
  ],
  "state": [
    "COMPLETED",
    "CANCELLED",
    "PENDING"
  ],
  "tx_type": [
    "CREATE_FOR_ADMIN_MINT",
    "FUND_ACCOUNT"
  ]
}
```

