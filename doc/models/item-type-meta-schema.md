
# Item Type Meta Schema

## Structure

`ItemTypeMetaSchema`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exampleJsonSchema` | `Record<string, unknown> \| null` | Required | - |
| `metaJsonSchema` | `Record<string, unknown> \| null` | Required | - |

## Example (as JSON)

```json
{
  "example_json_schema": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "meta_json_schema": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

