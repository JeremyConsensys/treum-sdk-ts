
# Login Response

## Structure

`LoginResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessToken` | `string` | Required | - |
| `user` | [`UserV2Output`](../../doc/models/user-v2-output.md) | Required | - |

## Example (as JSON)

```json
{
  "access_token": "access_token8",
  "user": {
    "active": false,
    "email": "email6",
    "id": "0000143c-0000-0000-0000-000000000000",
    "is_managed_account": false,
    "last_login": null,
    "last_seen": null,
    "organization": null,
    "organization_id": "000002a8-0000-0000-0000-000000000000",
    "permissions": [
      "permissions7",
      "permissions8"
    ],
    "public_key": "public_key6",
    "role_id": "00000d94-0000-0000-0000-000000000000"
  }
}
```

