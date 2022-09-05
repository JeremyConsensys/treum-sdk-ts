
# Get Plan Subscription Output

## Structure

`GetPlanSubscriptionOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `plan` | [`PublicCollectionOutput`](../../doc/models/public-collection-output.md) | Required | - |
| `startDate` | `string` | Required | - |
| `usage` | [`Usage`](../../doc/models/usage.md) | Required | - |

## Example (as JSON)

```json
{
  "plan": {
    "id": "00001d82-0000-0000-0000-000000000000",
    "name": "name4"
  },
  "start_date": "2016-03-13T12:52:32.123Z",
  "usage": {
    "fixed_usage": {
      "key0": {
        "limit": 238,
        "usage": 228
      },
      "key1": {
        "limit": 239,
        "usage": 227
      },
      "key2": {
        "limit": 240,
        "usage": 226
      }
    },
    "monthly_usage": {
      "key0": {
        "limit": 184,
        "usage": 138
      },
      "key1": {
        "limit": 185,
        "usage": 139
      }
    },
    "monthly_usage_renewal_at": "2016-03-13T12:52:32.123Z",
    "monthly_usage_started_at": "2016-03-13T12:52:32.123Z"
  }
}
```

