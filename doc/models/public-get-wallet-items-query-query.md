
# Public Get Wallet Items Query Query

## Structure

`PublicGetWalletItemsQueryQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contractAddress` | `string[]` | Required | - |
| `networkId` | `number[]` | Required | **Constraints**: `>= 0` |

## Example (as JSON)

```json
{
  "contract_address": [
    "contract_address3",
    "contract_address4"
  ],
  "network_id": [
    194.34,
    194.35,
    194.36
  ]
}
```

