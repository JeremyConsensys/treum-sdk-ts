
# Create Item Type Endpoint Body

## Structure

`CreateItemTypeEndpointBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `jsonSchema` | `Record<string, unknown> \| null` | Required | - |
| `name` | `string` | Required | SafeString |
| `organizationId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "json_schema": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "name": "name0",
  "organization_id": null
}
```

