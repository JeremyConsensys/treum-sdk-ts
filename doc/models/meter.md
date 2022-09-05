
# Meter

## Structure

`Meter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number` | Required | Uint<br>**Constraints**: `>= 0` |
| `target` | [`TargetEnum`](../../doc/models/target-enum.md) | Required | - |
| `type` | [`Type1Enum`](../../doc/models/type-1-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "limit": 237.24,
  "target": "MINT_TOKEN",
  "type": "FIXED"
}
```

