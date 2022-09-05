
# Platform Stripe Account Input

## Structure

`PlatformStripeAccountInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `config` | `Record<string, unknown> \| undefined` | Optional | - |
| `feePercentageBps` | `number \| undefined` | Optional | - |
| `mode` | [`ModeEnum`](../../doc/models/mode-enum.md) | Required | - |
| `name` | `string` | Required | - |
| `publishableKey` | `string` | Required | - |
| `secretKey` | `string` | Required | - |
| `sessionTimeoutMinutes` | `number` | Required | - |
| `stripeAccountId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "config": null,
  "fee_percentage_bps": null,
  "mode": "LIVE",
  "name": "name0",
  "publishable_key": "publishable_key8",
  "secret_key": "secret_key6",
  "session_timeout_minutes": 98,
  "stripe_account_id": "stripe_account_id0"
}
```

