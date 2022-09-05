
# Provision Item Body

## Structure

`ProvisionItemBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | `string` | Required | SafeString |
| `parameters` | `Record<string, unknown> \| null` | Required | - |

## Example (as JSON)

```json
{
  "action": "action2",
  "parameters": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

