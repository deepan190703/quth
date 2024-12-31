# quth

## Testing Admin API Endpoints

To test the admin API endpoints using Postman or curl, follow these steps:

### 1. Set up the environment

Ensure that the Django project is running and accessible. You can start the server by executing:

```bash
python manage.py runserver
```

Make sure the database is migrated and the necessary models are created.

### 2. Authenticate as an admin user

Create an admin user using the Django admin interface or the command line. Obtain an authentication token if using token-based authentication.

### 3. Test the API endpoints

#### Create a new IPO

**Postman:**

1. Open Postman and create a new POST request.
2. Set the URL to `http://localhost:8000/api/admin/companies/`.
3. In the "Body" tab, select "raw" and "JSON" format.
4. Enter the following JSON data:

```json
{
    "name": "Test Company",
    "logo": null,
    "price_band_low": "100.00",
    "price_band_high": "200.00",
    "open_date": "2024-01-01",
    "close_date": "2024-01-10",
    "issue_size": "1000000.00",
    "issue_type": "Public",
    "listing_date": "2024-02-01",
    "status": "Open",
    "ipo_price": "150.00",
    "listing_price": "160.00",
    "current_market_price": "170.00",
    "rhp_document": null,
    "drhp_document": null
}
```

5. Send the request and verify the response.

**curl:**

```bash
curl -X POST http://localhost:8000/api/admin/companies/ \
    -H "Content-Type: application/json" \
    -d '{
        "name": "Test Company",
        "logo": null,
        "price_band_low": "100.00",
        "price_band_high": "200.00",
        "open_date": "2024-01-01",
        "close_date": "2024-01-10",
        "issue_size": "1000000.00",
        "issue_type": "Public",
        "listing_date": "2024-02-01",
        "status": "Open",
        "ipo_price": "150.00",
        "listing_price": "160.00",
        "current_market_price": "170.00",
        "rhp_document": null,
        "drhp_document": null
    }'
```

#### Update an existing IPO

**Postman:**

1. Open Postman and create a new PUT request.
2. Set the URL to `http://localhost:8000/api/admin/companies/{id}/` (replace `{id}` with the actual company ID).
3. In the "Body" tab, select "raw" and "JSON" format.
4. Enter the updated JSON data:

```json
{
    "name": "Updated Company",
    "logo": null,
    "price_band_low": "100.00",
    "price_band_high": "200.00",
    "open_date": "2024-01-01",
    "close_date": "2024-01-10",
    "issue_size": "1000000.00",
    "issue_type": "Public",
    "listing_date": "2024-02-01",
    "status": "Open",
    "ipo_price": "150.00",
    "listing_price": "160.00",
    "current_market_price": "170.00",
    "rhp_document": null,
    "drhp_document": null
}
```

5. Send the request and verify the response.

**curl:**

```bash
curl -X PUT http://localhost:8000/api/admin/companies/{id}/ \
    -H "Content-Type: application/json" \
    -d '{
        "name": "Updated Company",
        "logo": null,
        "price_band_low": "100.00",
        "price_band_high": "200.00",
        "open_date": "2024-01-01",
        "close_date": "2024-01-10",
        "issue_size": "1000000.00",
        "issue_type": "Public",
        "listing_date": "2024-02-01",
        "status": "Open",
        "ipo_price": "150.00",
        "listing_price": "160.00",
        "current_market_price": "170.00",
        "rhp_document": null,
        "drhp_document": null
    }'
```

#### Delete an IPO

**Postman:**

1. Open Postman and create a new DELETE request.
2. Set the URL to `http://localhost:8000/api/admin/companies/{id}/` (replace `{id}` with the actual company ID).
3. Send the request and verify the response.

**curl:**

```bash
curl -X DELETE http://localhost:8000/api/admin/companies/{id}/
```

### 4. Verify the responses

Check the HTTP status codes and response bodies to ensure the API endpoints are working as expected. Verify that the data is correctly created, updated, or deleted in the database.

### 5. Automate the tests

Write automated tests using Django's `TestCase` class in `ipo_portal/tests.py`. Use Django's test client to send HTTP requests and verify the responses. Ensure that the tests cover all CRUD operations and edge cases.
