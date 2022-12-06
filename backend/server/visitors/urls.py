from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from visitors.views import VisitorsViewSet

router = routers.DefaultRouter()
router.register(r'visitors', VisitorsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
]
