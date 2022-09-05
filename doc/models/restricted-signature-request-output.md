
# Restricted Signature Request Output

## Structure

`RestrictedSignatureRequestOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `method` | `string` | Required | - |
| `networkId` | `number` | Required | - |
| `parameters` | `Record<string, unknown> \| null` | Required | - |
| `sender` | `string` | Required | ChecksumAddress |
| `to` | `string` | Required | ChecksumAddress |
| `value` | `number \| undefined` | Optional | **Default**: `0` |

## Example (as JSON)

```json
{
  "method": "method6",
  "network_id": 156,
  "parameters": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "sender": "sender8",
  "to": "to6",
  "value": null
}
```

