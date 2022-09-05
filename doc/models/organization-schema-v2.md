
# Organization Schema V2

## Structure

`OrganizationSchemaV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `auth0Id` | `string \| undefined` | Optional | - |
| `domain` | `string \| undefined` | Optional | - |
| `fees` | [`Fees \| undefined`](../../doc/models/fees.md) | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `isEnabled` | `boolean \| undefined` | Optional | - |
| `metaData` | `unknown \| undefined` | Optional | - |
| `mfaRequired` | `boolean \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `networkIds` | `number[] \| undefined` | Optional | - |
| `stripeConnectTypes` | [`StripeConnectTypeEnum[] \| undefined`](../../doc/models/stripe-connect-type-enum.md) | Optional | - |
| `users` | [`UserV2Output[] \| undefined`](../../doc/models/user-v2-output.md) | Optional | - |
| `wallets` | [`Wallets \| undefined`](../../doc/models/wallets.md) | Optional | - |

## Example (as JSON)

```json
{
  "auth0_id": null,
  "domain": null,
  "fees": null,
  "id": null,
  "is_enabled": null,
  "meta_data": null,
  "mfa_required": null,
  "name": null,
  "network_ids": null,
  "stripe_connect_types": null,
  "users": null,
  "wallets": null
}
```

