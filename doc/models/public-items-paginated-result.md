
# Public Items Paginated Result

## Structure

`PublicItemsPaginatedResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | - |
| `hasMore` | `boolean` | Required | - |
| `items` | [`PublicItem[]`](../../doc/models/public-item.md) | Required | - |
| `totalResults` | `number` | Required | - |

## Example (as JSON)

```json
{
  "cursor": null,
  "has_more": false,
  "items": [
    {
      "attributes": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "collection_id": "0000171f-0000-0000-0000-000000000000",
      "id": "0000218b-0000-0000-0000-000000000000",
      "listing": null,
      "media": {
        "image": null
      },
      "token_contract": {
        "address": null,
        "capabilities": [
          "BURN_TOKEN",
          "MINT_TO_ADDRESS"
        ],
        "deploy_tx_id": null,
        "network_id": 207,
        "symbol": "symbol3",
        "token_type": "ERC1155",
        "tx_hash": null
      },
      "token_id": "token_id1"
    },
    {
      "attributes": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "collection_id": "00001720-0000-0000-0000-000000000000",
      "id": "0000218c-0000-0000-0000-000000000000",
      "listing": null,
      "media": {
        "image": null
      },
      "token_contract": {
        "address": null,
        "capabilities": [
          "MINT_TO_ADDRESS",
          "IS_MINTER",
          "ERC1155"
        ],
        "deploy_tx_id": null,
        "network_id": 208,
        "symbol": "symbol4",
        "token_type": "ERC721",
        "tx_hash": null
      },
      "token_id": "token_id2"
    }
  ],
  "total_results": 144
}
```

