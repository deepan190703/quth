# Generated by Django 5.1.4 on 2024-12-28 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('logo', models.ImageField(upload_to='company_logos/')),
                ('price_band_low', models.DecimalField(decimal_places=2, max_digits=10)),
                ('price_band_high', models.DecimalField(decimal_places=2, max_digits=10)),
                ('open_date', models.DateField()),
                ('close_date', models.DateField()),
                ('issue_size', models.DecimalField(decimal_places=2, max_digits=15)),
                ('issue_type', models.CharField(max_length=50)),
                ('listing_date', models.DateField(blank=True, null=True)),
                ('status', models.CharField(max_length=50)),
                ('ipo_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('listing_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('current_market_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('rhp_document', models.FileField(upload_to='documents/rhp/')),
                ('drhp_document', models.FileField(upload_to='documents/drhp/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
