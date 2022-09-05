
# Get Wallet Pools Query

## Structure

`GetWalletPoolsQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | SafeString |
| `limit` | `number \| undefined` | Optional | Uint<br>**Constraints**: `>= 0` |
| `orderBy` | [`OrderBy2Enum \| undefined`](../../doc/models/order-by-2-enum.md) | Optional | - |
| `orderDirection` | [`OrderDirection1Enum \| undefined`](../../doc/models/order-direction-1-enum.md) | Optional | - |
| `organizationId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "cursor": null,
  "limit": null,
  "order_by": null,
  "order_direction": null,
  "organization_id": null
}
```

