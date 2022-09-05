
# Get Claim Output

## Structure

`GetClaimOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isActive` | `boolean` | Required | - |
| `isClaimed` | `boolean` | Required | - |
| `item` | [`PublicItem`](../../doc/models/public-item.md) | Required | - |
| `quantity` | `number` | Required | - |

## Example (as JSON)

```json
{
  "is_active": false,
  "is_claimed": false,
  "item": {
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
    "collection_id": "0000192c-0000-0000-0000-000000000000",
    "id": "00002398-0000-0000-0000-000000000000",
    "listing": null,
    "media": {
      "image": null
    },
    "token_contract": {
      "address": null,
      "capabilities": [
        "ERC20_METADATA",
        "ERC721",
        "ERC721_METADATA"
      ],
      "deploy_tx_id": null,
      "network_id": 28,
      "symbol": "symbol8",
      "token_type": "ERC721",
      "tx_hash": null
    },
    "token_id": "token_id6"
  },
  "quantity": 68
}
```

