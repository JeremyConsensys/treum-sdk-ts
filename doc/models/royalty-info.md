
# Royalty Info

## Structure

`RoyaltyInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountBps` | `number` | Required | BasisPoints<br>**Constraints**: `>= 0`, `<= 10000` |
| `receiver` | `string` | Required | ChecksumAddress |

## Example (as JSON)

```json
{
  "amount_bps": 92.64,
  "receiver": "receiver0"
}
```

