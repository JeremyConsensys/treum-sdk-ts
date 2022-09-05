
# Create Organization Input

## Structure

`CreateOrganizationInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `autoFund` | `boolean \| undefined` | Optional | **Default**: `true` |
| `domain` | `string \| undefined` | Optional | SafeString |
| `fundingWalletId` | `string \| undefined` | Optional | - |
| `hardwareWallet` | `boolean \| undefined` | Optional | **Default**: `false` |
| `mfaRequired` | `boolean \| undefined` | Optional | **Default**: `false` |
| `name` | `string` | Required | SafeString |
| `platformSaleFee` | `number \| undefined` | Optional | **Default**: `0` |

## Example (as JSON)

```json
{
  "auto_fund": null,
  "domain": null,
  "funding_wallet_id": null,
  "hardware_wallet": null,
  "mfa_required": null,
  "name": "name0",
  "platform_sale_fee": null
}
```

