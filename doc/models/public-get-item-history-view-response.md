
# Public Get Item History View Response

## Structure

`PublicGetItemHistoryViewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `history` | [`History[]`](../../doc/models/history.md) | Required | - |

## Example (as JSON)

```json
{
  "history": [
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "quantity": 8,
      "timestamp": "2016-03-13T12:52:32.123Z",
      "type": "AUCTION_BID"
    },
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "quantity": 9,
      "timestamp": "2016-03-13T12:52:32.123Z",
      "type": "BURN"
    }
  ]
}
```

