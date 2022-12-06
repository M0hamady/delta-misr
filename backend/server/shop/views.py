from django.shortcuts import render

# Create your views here.

# Create your views here.
from rest_framework import viewsets

from .models import Category_items, Item 
from .serializers import CategorySerializer ,ItemSerializer


class CategoryViewSet(viewsets.ModelViewSet):
   queryset = Category_items.objects.all()
   serializer_class = CategorySerializer


class ItemViewSet(viewsets.ModelViewSet):
   queryset = Item.objects.all()
   serializer_class = ItemSerializer
