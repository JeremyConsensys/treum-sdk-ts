
# Create Organization Email Template Test Mail Body

## Structure

`CreateOrganizationEmailTemplateTestMailBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `html` | `string` | Required | SafeString |
| `subject` | `string` | Required | SafeString |
| `variables` | [`OrganizationEmailTemplateVariable[]`](../../doc/models/organization-email-template-variable.md) | Required | - |

## Example (as JSON)

```json
{
  "html": "html0",
  "subject": "subject6",
  "variables": [
    {
      "default_value": null,
      "name": "name1",
      "template_type": "USER_TEST",
      "value": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  ]
}
```

