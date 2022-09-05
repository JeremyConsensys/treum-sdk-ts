
# Webhook

## Structure

`Webhook`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean` | Required | - |
| `id` | `string` | Required | - |
| `name` | `string` | Required | SafeString |
| `secret` | `string` | Required | SafeString |
| `url` | `string` | Required | SafeString |

## Example (as JSON)

```json
{
  "enabled": false,
  "id": "00001770-0000-0000-0000-000000000000",
  "name": "name0",
  "secret": "secret4",
  "url": "url4"
}
```

