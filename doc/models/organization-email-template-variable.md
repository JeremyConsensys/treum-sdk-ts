
# Organization Email Template Variable

## Structure

`OrganizationEmailTemplateVariable`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultValue` | `string \| undefined` | Optional | SafeString |
| `name` | `string` | Required | SafeString |
| `templateType` | [`TemplateTypeEnum`](../../doc/models/template-type-enum.md) | Required | - |
| `value` | `unknown \| null` | Required | - |

## Example (as JSON)

```json
{
  "default_value": null,
  "name": "name0",
  "template_type": "REDEEM_NFT",
  "value": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

