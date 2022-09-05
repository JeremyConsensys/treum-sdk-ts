
# Edit Organization Data

## Structure

`EditOrganizationData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isEnabled` | `boolean \| undefined` | Optional | - |
| `metaData` | `Record<string, unknown> \| undefined` | Optional | - |
| `mfaRequired` | `boolean \| undefined` | Optional | - |
| `networkIds` | `number[] \| undefined` | Optional | **Constraints**: `>= 0` |
| `payoutAddress` | `string \| undefined` | Optional | SafeString |
| `permissions` | `string[] \| undefined` | Optional | - |
| `platformSaleFee` | `number \| undefined` | Optional | - |
| `stripeConnectTypes` | [`StripeConnectTypeEnum[] \| undefined`](../../doc/models/stripe-connect-type-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "is_enabled": null,
  "meta_data": null,
  "mfa_required": null,
  "network_ids": null,
  "payout_address": null,
  "permissions": null,
  "platform_sale_fee": null,
  "stripe_connect_types": null
}
```

