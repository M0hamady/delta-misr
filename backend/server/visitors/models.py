from django.db import models
import uuid
# Create your models here.
class WebsiteVisitors(models.Model):
    ip = models.CharField( max_length=50,null=True)
    location =  models.CharField( max_length=50,null=True)
    longitude =  models.CharField( max_length=50,null=True)
    latitude =  models.CharField( max_length=50,null=True)
    date = models.DateTimeField(null=True, auto_now = True)

    def __str__(self):
        return self.ip
class SocialVisitors(models.Model):
    ip = models.CharField( max_length=50,null=True)
    location =  models.CharField( max_length=50,null=True)
    longitude =  models.CharField( max_length=50,null=True)
    latitude =  models.CharField( max_length=50,null=True)
    date = models.DateTimeField(null=True, auto_now = True)

    def __str__(self):
        return self.ip
class Contacts(models.Model):
    ip = models.CharField( max_length=50,null=True)
    location =  models.CharField( max_length=50,null=True)
    longitude =  models.CharField( max_length=50,null=True)
    latitude =  models.CharField( max_length=50,null=True)
    date = models.DateTimeField(null=True, auto_now = True)

    def __str__(self):
        return self.ip
