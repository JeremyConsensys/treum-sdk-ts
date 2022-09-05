
# Payment Intent Output

## Structure

`PaymentIntentOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| null` | Required | - |
| `expiresAt` | `string` | Required | - |
| `id` | `string` | Required | - |

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
  "expires_at": "2016-03-13T12:52:32.123Z",
  "id": "id0"
}
```

