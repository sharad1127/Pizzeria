
from django.shortcuts import render
from .models import Item
from rest_framework import generics, filters
from .serializers import ItemSerializer
from django_filters.rest_framework import DjangoFilterBackend  #why this import is not working? 

# Create your views here.


class ItemList(generics.ListAPIView):
    queryset = Item.objects.filter(STATUS = 'active').all()
    serializer_class= ItemSerializer
    filter_backends=[DjangoFilterBackend, filters.SearchFilter]
    search_field=['name', 'price']