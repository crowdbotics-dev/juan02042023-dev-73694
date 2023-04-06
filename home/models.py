from django.conf import settings
from django.db import models
class Newmodel(models.Model):
    'Generated Model'
    value = models.TextField()
class Cat(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    age = models.IntegerField()
    color = models.CharField(max_length=256,)
    is_fluffy = models.BooleanField()
    enemy = models.ForeignKey("home.Dog",on_delete=models.SET_NULL,null=True,blank=True,related_name="cat_enemy",)
class Dog(models.Model):
    'Generated Model'
    name = models.BigIntegerField()
class Wolf(models.Model):
    'Generated Model'
    cousin = models.ForeignKey("home.Dog",on_delete=models.CASCADE,related_name="wolf_cousin",)
    name = models.CharField(null=True,blank=True,max_length=256,)
