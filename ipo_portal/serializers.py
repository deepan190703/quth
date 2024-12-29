from rest_framework import serializers
from .models import Company

class CompanySerializer(serializers.ModelSerializer):
    listing_gain = serializers.SerializerMethodField()
    current_return = serializers.SerializerMethodField()

    class Meta:
        model = Company
        fields = '__all__'

    def get_listing_gain(self, obj):
        return obj.listing_gain()

    def get_current_return(self, obj):
        return obj.current_return()

    def validate(self, data):
        errors = {}
        if data['price_band_low'] > data['price_band_high']:
            errors['price_band'] = "Price band low cannot be greater than price band high."
        if data['open_date'] > data['close_date']:
            errors['dates'] = "Open date cannot be later than close date."
        if errors:
            raise serializers.ValidationError(errors)
        return data
