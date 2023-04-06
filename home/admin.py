from django.contrib import admin
from .models import Cat,Dog,Newmodel,Wolf
admin.site.register(Newmodel)
admin.site.register(Cat)
admin.site.register(Dog)
admin.site.register(Wolf)

# Register your models here.
