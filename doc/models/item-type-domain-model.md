
# Item Type Domain Model

## Structure

`ItemTypeDomainModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `jsonSchema` | `Record<string, unknown> \| null` | Required | - |
| `name` | `string` | Required | - |
| `organizationId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "id": "00001770-0000-0000-0000-000000000000",
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
  "organization_id": "00002684-0000-0000-0000-000000000000"
}
```

