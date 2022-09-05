
# Sell Item Body

## Structure

`SellItemBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| null` | Required | - |
| `quantity` | `number \| undefined` | Optional | Uint<br>**Constraints**: `>= 0` |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | - |

## Example (as JSON)

```json
{
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
  "quantity": null,
  "type": "FIAT_SET_PRICE"
}
```

