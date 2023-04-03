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
