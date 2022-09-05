
# Platform Wallet

## Structure

`PlatformWallet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string` | Required | - |
| `custodial` | `boolean` | Required | - |
| `id` | `string` | Required | - |
| `name` | `string` | Required | - |
| `networkIds` | `number[]` | Required | - |
| `restrictNetworks` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "address": "address6",
  "custodial": false,
  "id": "00001770-0000-0000-0000-000000000000",
  "name": "name0",
  "network_ids": [
    243,
    244
  ],
  "restrict_networks": false
}
```

