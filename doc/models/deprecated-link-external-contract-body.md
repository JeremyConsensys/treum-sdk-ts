
# Deprecated Link External Contract Body

## Structure

`DeprecatedLinkExternalContractBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string` | Required | ChecksumAddress |
| `networkId` | `number` | Required | Uint<br>**Constraints**: `>= 0` |
| `tokenFilter` | `Record<string, unknown> \| undefined` | Optional | - |
| `tokenType` | [`TokenTypeEnum`](../../doc/models/token-type-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "address": "address6",
  "network_id": 129.56,
  "token_filter": null,
  "token_type": "ERC721"
}
```

