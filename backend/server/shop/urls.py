from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from shop.views import CategoryViewSet, ItemViewSet

router = routers.DefaultRouter()
router.register(r'category', CategoryViewSet)
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
]
