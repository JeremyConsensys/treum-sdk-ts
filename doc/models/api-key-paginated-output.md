
# Api Key Paginated Output

## Structure

`ApiKeyPaginatedOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | - |
| `hasMore` | `boolean` | Required | - |
| `results` | [`ApiKeyOutput[]`](../../doc/models/api-key-output.md) | Required | - |
| `totalResults` | `number` | Required | - |

## Example (as JSON)

```json
{
  "cursor": null,
  "has_more": false,
  "results": [
    {
      "expiration": null,
      "id": "00000a0d-0000-0000-0000-000000000000",
      "last_used": null,
      "name": "name3",
      "permissions": [
        "permissions0",
        "permissions1"
      ]
    }
  ],
  "total_results": 144
}
```

