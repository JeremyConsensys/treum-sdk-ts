
# Platform Stripe Account Output

## Structure

`PlatformStripeAccountOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `config` | `Record<string, unknown> \| undefined` | Optional | - |
| `feePercentageBps` | `number \| undefined` | Optional | - |
| `id` | `string` | Required | - |
| `mode` | [`ModeEnum`](../../doc/models/mode-enum.md) | Required | - |
| `name` | `string` | Required | - |
| `publishableKey` | `string` | Required | - |
| `sessionTimeoutMinutes` | `number` | Required | - |
| `stripeAccountId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "config": null,
  "fee_percentage_bps": null,
  "id": "id0",
  "mode": "LIVE",
  "name": "name0",
  "publishable_key": "publishable_key8",
  "session_timeout_minutes": 98,
  "stripe_account_id": "stripe_account_id0"
}
```

