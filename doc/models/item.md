
# Item

## Structure

`Item`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attributes` | `Record<string, unknown> \| null` | Required | - |
| `id` | `string` | Required | - |
| `itemTypeId` | `string \| undefined` | Optional | - |
| `listing` | [`Listing \| undefined`](../../doc/models/listing.md) | Optional | - |
| `media` | [`Media`](../../doc/models/media.md) | Required | - |
| `productId` | `string` | Required | - |
| `royaltyInfo` | [`RoyaltyInfo`](../../doc/models/royalty-info.md) | Required | - |
| `tokenContract` | [`TokenContract`](../../doc/models/token-contract.md) | Required | - |
| `tokenId` | `number` | Required | - |
| `tokenStatus` | [`TokenStatusEnum`](../../doc/models/token-status-enum.md) | Required | - |
| `tokensAvailable` | `number` | Required | - |

## Example (as JSON)

```json
{
  "attributes": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "id": "00001770-0000-0000-0000-000000000000",
  "item_type_id": null,
  "listing": null,
  "media": {
    "image": null
  },
  "product_id": "000003ba-0000-0000-0000-000000000000",
  "royalty_info": {
    "amount_bps": 163.7,
    "receiver": "receiver4"
  },
  "token_contract": {
    "address": null,
    "capabilities": [
      "ERC1155",
      "IS_MINTER"
    ],
    "deploy_tx_id": null,
    "network_id": 148,
    "symbol": "symbol6",
    "token_type": "ERC721",
    "tx_hash": null
  },
  "token_id": 86,
  "token_status": "PROVISIONING",
  "tokens_available": 104
}
```

