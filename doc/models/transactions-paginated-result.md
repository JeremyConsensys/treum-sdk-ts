
# Transactions Paginated Result

## Structure

`TransactionsPaginatedResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | - |
| `hasMore` | `boolean` | Required | - |
| `results` | [`TransactionOutput[]`](../../doc/models/transaction-output.md) | Required | - |
| `totalResults` | `number` | Required | - |

## Example (as JSON)

```json
{
  "cursor": null,
  "has_more": false,
  "results": [
    {
      "created_at": "2016-03-13T12:52:32.123Z",
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "failure_count": 117,
      "id": "00000a0d-0000-0000-0000-000000000000",
      "network_id": 73,
      "nonce": 67,
      "on_chain_status": "SUCCESS",
      "signer": "signer3",
      "state": "CANCELLED",
      "tx_hash": "tx_hash9",
      "tx_type": "GRANT_ROLE"
    }
  ],
  "total_results": 144
}
```

