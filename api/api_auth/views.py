from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status


def index(request):
    """Index view for the auth app."""
    return Response({"message": "Auth API"}, status=status.HTTP_200_OK)


class LoginView(APIView):
    """Custom login view."""

    def post(self, request):
        # Placeholder implementation
        return Response({"message": "Login endpoint"}, status=status.HTTP_200_OK)
