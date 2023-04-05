from django.contrib import admin
from .models import Cat,Dog,Newmodel
admin.site.register(Newmodel)
admin.site.register(Cat)
admin.site.register(Dog)

# Register your models here.
