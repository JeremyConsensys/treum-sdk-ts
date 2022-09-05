
# Organization Email Template Domain Model

## Structure

`OrganizationEmailTemplateDomainModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `html` | `string` | Required | - |
| `originType` | [`OriginTypeEnum`](../../doc/models/origin-type-enum.md) | Required | - |
| `subject` | `string` | Required | - |
| `templateType` | [`TemplateTypeEnum`](../../doc/models/template-type-enum.md) | Required | - |
| `unlayerEmbedDesignJson` | `Record<string, unknown> \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "html": "html0",
  "origin_type": "PLATFORM_DEFAULT",
  "subject": "subject6",
  "template_type": "REDEEM_NFT",
  "unlayer_embed_design_json": null
}
```

