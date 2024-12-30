from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User

class GoogleOAuthTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.login_url = reverse('login')
        self.register_url = reverse('register')
        self.google_login_url = reverse('social:begin', args=['google-oauth2'])

    def test_google_oauth_login(self):
        response = self.client.get(self.google_login_url)
        self.assertEqual(response.status_code, 302)
        self.assertIn('accounts.google.com', response.url)

    def test_google_oauth_registration(self):
        response = self.client.get(self.register_url)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Continue with Google')
