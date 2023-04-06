from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CatViewSet,DogViewSet,NewmodelViewSet,WolfViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('newmodel', NewmodelViewSet )
router.register('cat', CatViewSet )
router.register('dog', DogViewSet )
router.register('wolf', WolfViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
