from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .models import WebsiteVisitors 
from .serializers import VisitorSerializer 


class VisitorsViewSet(viewsets.ModelViewSet):
   queryset = WebsiteVisitors.objects.all()
   serializer_class = VisitorSerializer
