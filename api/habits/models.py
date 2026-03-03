import uuid

from django.db import models

from habit_tracker_api.base import CustomModel


# Create your models here.
class Habit(CustomModel):
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
