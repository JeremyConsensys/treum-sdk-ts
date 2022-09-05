
# Stripe Integration Output

## Structure

`StripeIntegrationOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `connectType` | [`ConnectTypeEnum`](../../doc/models/connect-type-enum.md) | Required | - |
| `platformStripeAccount` | [`PublicPlatformStripeAccountOutput`](../../doc/models/public-platform-stripe-account-output.md) | Required | - |
| `setupComplete` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "account_id": "account_id2",
  "connect_type": "CUSTOM",
  "platform_stripe_account": {
    "enabled": false,
    "id": "id0",
    "mode": "LIVE",
    "name": "name0",
    "publishable_key": "publishable_key8"
  },
  "setup_complete": false
}
```

