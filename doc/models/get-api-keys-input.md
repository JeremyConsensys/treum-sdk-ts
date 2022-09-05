
# Get Api Keys Input

## Structure

`GetApiKeysInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | SafeString |
| `limit` | `number \| undefined` | Optional | PaginationLimit<br>**Default**: `100`<br>**Constraints**: `>= 1`, `<= 100` |
| `orderDirection` | [`OrderDirectionEnum \| undefined`](../../doc/models/order-direction-enum.md) | Optional | **Default**: `OrderDirectionEnum.ASC` |

## Example (as JSON)

```json
{
  "cursor": null,
  "limit": null,
  "order_direction": null
}
```

