
# Get Email Integrations Query

## Structure

`GetEmailIntegrationsQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | SafeString |
| `limit` | `number \| undefined` | Optional | Uint<br>**Constraints**: `>= 0` |
| `orderBy` | [`OrderBy1Enum \| undefined`](../../doc/models/order-by-1-enum.md) | Optional | - |
| `orderDirection` | [`OrderDirection1Enum \| undefined`](../../doc/models/order-direction-1-enum.md) | Optional | - |
| `provider` | [`Provider1Enum \| undefined`](../../doc/models/provider-1-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "cursor": null,
  "limit": null,
  "order_by": null,
  "order_direction": null,
  "provider": null
}
```

