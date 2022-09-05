
# Organization Wallet

## Structure

`OrganizationWallet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string` | Required | - |
| `autoFund` | `boolean` | Required | - |
| `custodial` | `boolean` | Required | - |
| `fundingWalletId` | `string \| undefined` | Optional | - |
| `id` | `string` | Required | - |
| `isDefault` | `boolean` | Required | - |
| `name` | `string` | Required | - |
| `networkIds` | `number[]` | Required | - |
| `restrictNetworks` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "address": "address6",
  "auto_fund": false,
  "custodial": false,
  "funding_wallet_id": null,
  "id": "00001770-0000-0000-0000-000000000000",
  "is_default": false,
  "name": "name0",
  "network_ids": [
    243,
    244
  ],
  "restrict_networks": false
}
```

