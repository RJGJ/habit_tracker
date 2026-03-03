from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import LoginView, RegisterView


def index(request):
    """Simple index view."""
    from rest_framework.response import Response
    from rest_framework import status

    return Response({"message": "Auth API"}, status=status.HTTP_200_OK)


urlpatterns = [
    path("", index, name="index"),
    path("login/", LoginView.as_view(), name="login"),
    path("register/", RegisterView.as_view(), name="register"),
    path("token/refresh", TokenRefreshView.as_view(), name="token_refresh"),
]
