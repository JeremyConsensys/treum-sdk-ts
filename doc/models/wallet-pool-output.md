
# Wallet Pool Output

## Structure

`WalletPoolOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contract` | [`PublicGetContractOutput \| undefined`](../../doc/models/public-get-contract-output.md) | Optional | - |
| `contractPendingTxId` | `string \| undefined` | Optional | - |
| `id` | `string` | Required | - |
| `name` | `string` | Required | - |
| `networkId` | `number` | Required | - |
| `organizationId` | `string` | Required | - |
| `poolSize` | `number` | Required | - |
| `wallets` | [`OrganizationWallet[]`](../../doc/models/organization-wallet.md) | Required | - |

## Example (as JSON)

```json
{
  "contract": null,
  "contract_pending_tx_id": null,
  "id": "00001770-0000-0000-0000-000000000000",
  "name": "name0",
  "network_id": 156,
  "organization_id": "00002684-0000-0000-0000-000000000000",
  "pool_size": 106,
  "wallets": [
    {
      "address": "address8",
      "auto_fund": false,
      "custodial": false,
      "funding_wallet_id": null,
      "id": "000014c0-0000-0000-0000-000000000000",
      "is_default": false,
      "name": "name2",
      "network_ids": [
        151
      ],
      "restrict_networks": false
    },
    {
      "address": "address9",
      "auto_fund": true,
      "custodial": true,
      "funding_wallet_id": null,
      "id": "000014c1-0000-0000-0000-000000000000",
      "is_default": true,
      "name": "name3",
      "network_ids": [
        152,
        153
      ],
      "restrict_networks": true
    },
    {
      "address": "address0",
      "auto_fund": false,
      "custodial": false,
      "funding_wallet_id": null,
      "id": "000014c2-0000-0000-0000-000000000000",
      "is_default": false,
      "name": "name4",
      "network_ids": [
        153,
        154,
        155
      ],
      "restrict_networks": false
    }
  ]
}
```

