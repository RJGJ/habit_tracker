from django.shortcuts import render
from rest_framework import permissions, viewsets

from .serializers import HabitSerializer
from .models import Habit


# Create your views here.
class HabitViewSet(viewsets.ModelViewSet):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer
    # permission_classes = [permissions.IsAuthenticated]
