import json
from random import randint, choice

# Sample data
commissions = []
total_commission = 0

for i in range(1, 58):
    amount = randint(50, 200) * 1.33 # Random amount between $50 and $200
    total_commission += amount
    commissions.append({
        "payment_id": f"P{i:03}",
        "service_id": f"S{i:03}",
        "customer": f"Customer {i}",
        "service": f"Service {choice(['X', 'Y', 'Z'])}",
        "amount": "${:,.2f}".format(amount)
    })

# Final JSON structure
json_data = {
    "statement_id": "123456",
    "date": "2024/08/09",
    "recipient": "John Doe",
    "identifier_type": "SSN",
    "identifier": "ID1234",
    "address_line_1": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip_code": "12345",
    "period_start_date": "2024/07/01",
    "period_final_date": "2024/07/31",
    "commissions": commissions,
    "total_commission": "${:,.2f}".format(total_commission),
    "bank_account_name": "John Doe",
    "bank_account_last_three": "789",
    "bank_routing_last_three": "456",
    "bank_account_bank": "Bank of Example"
}

# Convert to JSON and print
json_output = json.dumps(json_data, indent=2)
print(json_output)
