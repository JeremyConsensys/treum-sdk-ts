
# Payments Checkout Output

## Structure

`PaymentsCheckoutOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | - |
| `clientSecret` | `string` | Required | - |
| `expiresAt` | `string` | Required | - |
| `mode` | [`ModeEnum`](../../doc/models/mode-enum.md) | Required | - |
| `publishableKey` | `string` | Required | - |
| `sessionId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "account_id": "account_id2",
  "client_secret": "client_secret8",
  "expires_at": "2016-03-13T12:52:32.123Z",
  "mode": "LIVE",
  "publishable_key": "publishable_key8",
  "session_id": "000020e2-0000-0000-0000-000000000000"
}
```

