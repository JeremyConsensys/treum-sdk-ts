
# Collection Stats

## Structure

`CollectionStats`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attributes` | [`Attribute[]`](../../doc/models/attribute.md) | Required | - |
| `excluded` | `string[]` | Required | - |
| `tokensIndexed` | `number` | Required | - |

## Example (as JSON)

```json
{
  "attributes": [
    {
      "count": 29,
      "name": "name1",
      "values": [
        {
          "count": 19,
          "name": "name1"
        },
        {
          "count": 18,
          "name": "name2"
        }
      ]
    }
  ],
  "excluded": [
    "excluded2",
    "excluded3",
    "excluded4"
  ],
  "tokens_indexed": 184
}
```

