
# Webhook Input

## Structure

`WebhookInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean` | Required | - |
| `name` | `string` | Required | SafeString |
| `secret` | `string` | Required | SafeString |
| `url` | `string` | Required | SafeString |

## Example (as JSON)

```json
{
  "enabled": false,
  "name": "name0",
  "secret": "secret4",
  "url": "url4"
}
```

