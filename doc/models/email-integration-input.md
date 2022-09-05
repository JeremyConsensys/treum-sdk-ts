
# Email Integration Input

## Structure

`EmailIntegrationInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `config` | `Record<string, unknown> \| null` | Required | - |
| `provider` | [`Provider1Enum`](../../doc/models/provider-1-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "config": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    },
    "key2": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "provider": "MAILGUN"
}
```

