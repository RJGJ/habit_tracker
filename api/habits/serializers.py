from rest_framework import serializers

from .models import Habit


class HabitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habit
        exclude = ["deleted_at"]
