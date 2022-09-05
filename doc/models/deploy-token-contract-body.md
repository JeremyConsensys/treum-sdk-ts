
# Deploy Token Contract Body

## Structure

`DeployTokenContractBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contract` | `string \| undefined` | Optional | SafeString |
| `defaultItemTypeId` | `string \| undefined` | Optional | - |
| `networkId` | `number \| undefined` | Optional | Uint<br>**Constraints**: `>= 0` |
| `symbol` | `string` | Required | SafeString |
| `tokenAssignmentStrategy` | [`TokenAssignmentStrategyEnum \| undefined`](../../doc/models/token-assignment-strategy-enum.md) | Optional | **Default**: `TokenAssignmentStrategyEnum.INCREMENTALATPROVISION` |
| `walletpoolId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "contract": null,
  "default_item_type_id": null,
  "network_id": null,
  "symbol": "symbol8",
  "token_assignment_strategy": null,
  "walletpool_id": null
}
```

