
# Create Bulk Item for Collection Body

## Structure

`CreateBulkItemForCollectionBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemList` | [`CreateItemForCollectionBody[]`](../../doc/models/create-item-for-collection-body.md) | Required | - |

## Example (as JSON)

```json
{
  "item_list": [
    {
      "attributes": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "item_type_id": null
    }
  ]
}
```

