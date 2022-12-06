from rest_framework import serializers
from .models import WebsiteVisitors ,SocialVisitors, Contacts

class VisitorSerializer(serializers.ModelSerializer):
   class Meta:
       model = WebsiteVisitors
       fields = "__all__"
class SocialVisitorsSerializer(serializers.ModelSerializer):
   class Meta:
       model = SocialVisitors
       fields = "__all__"
class ContactSerializer(serializers.ModelSerializer):
   class Meta:
       model = Contacts
       fields = "__all__"
