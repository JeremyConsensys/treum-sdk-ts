
# Public Item

## Structure

`PublicItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attributes` | `Record<string, unknown> \| null` | Required | - |
| `collectionId` | `string` | Required | - |
| `id` | `string` | Required | - |
| `listing` | [`Listing \| undefined`](../../doc/models/listing.md) | Optional | - |
| `media` | [`Media`](../../doc/models/media.md) | Required | - |
| `tokenContract` | [`TokenContract`](../../doc/models/token-contract.md) | Required | - |
| `tokenId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "attributes": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "collection_id": "00000d04-0000-0000-0000-000000000000",
  "id": "00001770-0000-0000-0000-000000000000",
  "listing": null,
  "media": {
    "image": null
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
  "token_id": "token_id6"
}
```

