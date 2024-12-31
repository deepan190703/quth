from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import Company
from django.contrib.auth.models import User

class AdminCompanyAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.admin_user = User.objects.create_superuser(username='admin', password='admin123', email='admin@example.com')
        self.client.force_authenticate(user=self.admin_user)
        self.company_data = {
            'name': 'Test Company',
            'logo': None,
            'price_band_low': '100.00',
            'price_band_high': '200.00',
            'open_date': '2024-01-01',
            'close_date': '2024-01-10',
            'issue_size': '1000000.00',
            'issue_type': 'Public',
            'listing_date': '2024-02-01',
            'status': 'Open',
            'ipo_price': '150.00',
            'listing_price': '160.00',
            'current_market_price': '170.00',
            'rhp_document': None,
            'drhp_document': None,
        }

    def test_create_ipo(self):
        url = reverse('admin:company-create-ipo')
        response = self.client.post(url, self.company_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Company.objects.count(), 1)
        self.assertEqual(Company.objects.get().name, 'Test Company')

    def test_update_ipo(self):
        company = Company.objects.create(**self.company_data)
        url = reverse('admin:company-update-ipo', args=[company.id])
        updated_data = self.company_data.copy()
        updated_data['name'] = 'Updated Company'
        response = self.client.put(url, updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        company.refresh_from_db()
        self.assertEqual(company.name, 'Updated Company')

    def test_delete_ipo(self):
        company = Company.objects.create(**self.company_data)
        url = reverse('admin:company-delete-ipo', args=[company.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Company.objects.count(), 0)
