
# Paginated Result

## Structure

`PaginatedResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | - |
| `hasMore` | `boolean` | Required | - |
| `results` | `unknown[]` | Required | - |
| `totalResults` | `number` | Required | - |

## Example (as JSON)

```json
{
  "cursor": null,
  "has_more": false,
  "results": [
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "total_results": 144
}
```

