
# Deploy Custom Token Contract Body

## Structure

`DeployCustomTokenContractBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `abi` | `unknown[]` | Required | - |
| `bytecode` | `string` | Required | HexString |
| `constructorArgs` | `unknown[]` | Required | - |
| `defaultItemTypeId` | `string \| undefined` | Optional | - |
| `networkId` | `number` | Required | Uint<br>**Constraints**: `>= 0` |
| `tokenAssignmentStrategy` | [`TokenAssignmentStrategyEnum \| undefined`](../../doc/models/token-assignment-strategy-enum.md) | Optional | **Default**: `TokenAssignmentStrategyEnum.INCREMENTALATPROVISION` |
| `walletpoolId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "abi": [
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "bytecode": "bytecode0",
  "constructor_args": [
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "default_item_type_id": null,
  "network_id": 129.56,
  "token_assignment_strategy": null,
  "walletpool_id": null
}
```

