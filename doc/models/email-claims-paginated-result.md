
# Email Claims Paginated Result

## Structure

`EmailClaimsPaginatedResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | - |
| `hasMore` | `boolean` | Required | - |
| `results` | [`EmailClaim[]`](../../doc/models/email-claim.md) | Required | - |
| `totalResults` | `number` | Required | - |

## Example (as JSON)

```json
{
  "cursor": null,
  "has_more": false,
  "results": [
    {
      "active": true,
      "claimed": true,
      "claimed_at": null,
      "collection_id": "000026b1-0000-0000-0000-000000000000",
      "created_at": "2016-03-13T12:52:32.123Z",
      "email": "email3",
      "expiration": "2016-03-13T12:52:32.123Z",
      "id": "00000a0d-0000-0000-0000-000000000000",
      "item_id": "0000192f-0000-0000-0000-000000000000",
      "last_pin_code_email_sent_at": null,
      "quantity": 241,
      "token_id": "token_id3",
      "tx_hash": null
    }
  ],
  "total_results": 144
}
```

