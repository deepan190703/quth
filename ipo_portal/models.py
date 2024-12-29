from django.db import models
from django.contrib.auth.models import User

class Company(models.Model):
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='company_logos/')
    price_band_low = models.DecimalField(max_digits=10, decimal_places=2)
    price_band_high = models.DecimalField(max_digits=10, decimal_places=2)
    open_date = models.DateField()
    close_date = models.DateField()
    issue_size = models.DecimalField(max_digits=15, decimal_places=2)
    issue_type = models.CharField(max_length=50)
    listing_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=50)
    ipo_price = models.DecimalField(max_digits=10, decimal_places=2)
    listing_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    current_market_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    rhp_document = models.FileField(upload_to='documents/rhp/')
    drhp_document = models.FileField(upload_to='documents/drhp/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def listing_gain(self):
        if self.listing_price and self.ipo_price:
            return ((self.listing_price - self.ipo_price) / self.ipo_price) * 100
        return None

    def current_return(self):
        if self.current_market_price and self.ipo_price:
            return ((self.current_market_price - self.ipo_price) / self.ipo_price) * 100
        return None

    def __str__(self):
        return self.name
