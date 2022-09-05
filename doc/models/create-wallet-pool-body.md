
# Create Wallet Pool Body

## Structure

`CreateWalletPoolBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | SafeString |
| `networkId` | `number` | Required | Uint<br>**Constraints**: `>= 0` |
| `poolSize` | `number` | Required | Uint<br>**Constraints**: `>= 0` |

## Example (as JSON)

```json
{
  "name": "name0",
  "network_id": 129.56,
  "pool_size": 149.54
}
```

