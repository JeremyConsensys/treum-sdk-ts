
# Email Claim

## Structure

`EmailClaim`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `active` | `boolean` | Required | - |
| `claimed` | `boolean` | Required | - |
| `claimedAt` | `string \| undefined` | Optional | - |
| `collectionId` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `email` | `string` | Required | - |
| `expiration` | `string` | Required | - |
| `id` | `string` | Required | - |
| `itemId` | `string` | Required | - |
| `lastPinCodeEmailSentAt` | `string \| undefined` | Optional | - |
| `quantity` | `number` | Required | - |
| `tokenId` | `string` | Required | - |
| `txHash` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "active": false,
  "claimed": false,
  "claimed_at": null,
  "collection_id": "00000d04-0000-0000-0000-000000000000",
  "created_at": "2016-03-13T12:52:32.123Z",
  "email": "email6",
  "expiration": "2016-03-13T12:52:32.123Z",
  "id": "00001770-0000-0000-0000-000000000000",
  "item_id": "00000bcc-0000-0000-0000-000000000000",
  "last_pin_code_email_sent_at": null,
  "quantity": 68,
  "token_id": "token_id6",
  "tx_hash": null
}
```

