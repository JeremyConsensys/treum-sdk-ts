
# Create Plan Input

## Structure

`CreatePlanInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `meters` | [`Meter[]`](../../doc/models/meter.md) | Required | - |
| `name` | `string` | Required | SafeString |

## Example (as JSON)

```json
{
  "meters": [
    {
      "limit": 137.47,
      "target": "PRODUCT_COUNT",
      "type": "MONTHLY"
    },
    {
      "limit": 137.46,
      "target": "USER_COUNT",
      "type": "FIXED"
    }
  ],
  "name": "name0"
}
```

