from django.db import models

# Create your models here.

  
class Category_items(models.Model):
    uuid = models.CharField( max_length = 300)
    name = models.CharField( max_length=50)
    description =models.CharField( max_length=350)
    
    def __str__(self):
        return self.name
    
class Item(models.Model):
    uuid = models.CharField( max_length = 300)
    category =models.ForeignKey(Category_items, on_delete=models.CASCADE)
    name = models.CharField(max_length=50) 
    description = models.CharField(max_length=350)
    price = models.IntegerField()
    size = models.IntegerField() 
    

    def __str__(self):
        return self.name
