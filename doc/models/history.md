
# History

## Structure

`History`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| null` | Required | - |
| `quantity` | `number` | Required | - |
| `timestamp` | `string` | Required | - |
| `type` | [`Type6Enum`](../../doc/models/type-6-enum.md) | Required | - |

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
  "quantity": 68,
  "timestamp": "2016-03-13T12:52:32.123Z",
  "type": "MINT"
}
```

