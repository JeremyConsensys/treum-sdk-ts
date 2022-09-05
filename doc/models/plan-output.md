
# Plan Output

## Structure

`PlanOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `meters` | [`Meter2[]`](../../doc/models/meter-2.md) | Required | - |
| `name` | `string` | Required | - |

## Example (as JSON)

```json
{
  "id": "00001770-0000-0000-0000-000000000000",
  "meters": [
    {
      "limit": 179,
      "target": "PRODUCT_COUNT",
      "type": "MONTHLY"
    },
    {
      "limit": 178,
      "target": "USER_COUNT",
      "type": "FIXED"
    }
  ],
  "name": "name0"
}
```

