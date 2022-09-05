
# Create Org Wallet Input

## Structure

`CreateOrgWalletInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string \| undefined` | Optional | ChecksumAddress |
| `autoFund` | `boolean` | Required | - |
| `custodial` | `boolean` | Required | - |
| `fundingWalletId` | `string \| undefined` | Optional | - |
| `fundingWalletType` | [`FundingWalletTypeEnum \| undefined`](../../doc/models/funding-wallet-type-enum.md) | Optional | - |
| `name` | `string` | Required | SafeString |
| `networkIds` | `number[] \| undefined` | Optional | **Constraints**: `>= 0` |
| `restrictNetworks` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "address": null,
  "auto_fund": false,
  "custodial": false,
  "funding_wallet_id": null,
  "funding_wallet_type": null,
  "name": "name0",
  "network_ids": null,
  "restrict_networks": false
}
```

