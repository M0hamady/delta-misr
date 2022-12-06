from rest_framework import serializers
from .models import Category_items ,Item

class CategorySerializer(serializers.ModelSerializer):
   class Meta:
       model = Category_items
       fields = "__all__"

class ItemSerializer(serializers.ModelSerializer):
   class Meta:
       model = Item
       fields = "__all__"
