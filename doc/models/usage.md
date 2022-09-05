
# Usage

## Structure

`Usage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixedUsage` | [`Record<string, FixedUsage>`](../../doc/models/fixed-usage.md) | Required | - |
| `monthlyUsage` | [`Record<string, MonthlyUsage>`](../../doc/models/monthly-usage.md) | Required | - |
| `monthlyUsageRenewalAt` | `string` | Required | - |
| `monthlyUsageStartedAt` | `string` | Required | - |

## Example (as JSON)

```json
{
  "fixed_usage": {
    "key0": {
      "limit": 96,
      "usage": 114
    },
    "key1": {
      "limit": 95,
      "usage": 115
    }
  },
  "monthly_usage": {
    "key0": {
      "limit": 146,
      "usage": 100
    },
    "key1": {
      "limit": 147,
      "usage": 101
    }
  },
  "monthly_usage_renewal_at": "2016-03-13T12:52:32.123Z",
  "monthly_usage_started_at": "2016-03-13T12:52:32.123Z"
}
```

