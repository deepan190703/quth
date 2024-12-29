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
