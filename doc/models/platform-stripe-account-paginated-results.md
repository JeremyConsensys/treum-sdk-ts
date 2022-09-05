
# Platform Stripe Account Paginated Results

## Structure

`PlatformStripeAccountPaginatedResults`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | - |
| `hasMore` | `boolean \| undefined` | Optional | **Default**: `false` |
| `results` | [`PlatformStripeAccountOutput[]`](../../doc/models/platform-stripe-account-output.md) | Required | - |
| `totalResults` | `number` | Required | - |

## Example (as JSON)

```json
{
  "cursor": null,
  "has_more": null,
  "results": [
    {
      "config": null,
      "fee_percentage_bps": null,
      "id": "id3",
      "mode": "TEST",
      "name": "name3",
      "publishable_key": "publishable_key5",
      "session_timeout_minutes": 15,
      "stripe_account_id": "stripe_account_id7"
    }
  ],
  "total_results": 144
}
```

