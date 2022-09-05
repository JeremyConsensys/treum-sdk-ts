
# Email Integrations Paginated Result

## Structure

`EmailIntegrationsPaginatedResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | - |
| `hasMore` | `boolean` | Required | - |
| `results` | [`EmailIntegrationOutput[]`](../../doc/models/email-integration-output.md) | Required | - |
| `totalResults` | `number` | Required | - |

## Example (as JSON)

```json
{
  "cursor": null,
  "has_more": false,
  "results": [
    {
      "config": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        },
        "key2": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "id": "00000a0d-0000-0000-0000-000000000000",
      "provider": "CUSTOM_SMTP"
    }
  ],
  "total_results": 144
}
```

