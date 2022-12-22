from dataclasses import fields
from rest_framework import serializers
from .models import Item



class ItemSerializer(serializers.ModelSerializer):

    image= serializers.ImageField(allow_null=True)    #What means this line?


    class Meta:
        model = Item
        fields = '__all__'