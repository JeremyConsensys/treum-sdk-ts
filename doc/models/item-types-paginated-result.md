
# Item Types Paginated Result

## Structure

`ItemTypesPaginatedResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | - |
| `hasMore` | `boolean` | Required | - |
| `results` | [`ItemTypeDomainModel[]`](../../doc/models/item-type-domain-model.md) | Required | - |
| `totalResults` | `number` | Required | - |

## Example (as JSON)

```json
{
  "cursor": null,
  "has_more": false,
  "results": [
    {
      "id": "00000a0d-0000-0000-0000-000000000000",
      "json_schema": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "name": "name3",
      "organization_id": "00000cd7-0000-0000-0000-000000000000"
    }
  ],
  "total_results": 144
}
```

