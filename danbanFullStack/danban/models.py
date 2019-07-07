from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=100)
    box = models.IntegerField(default=1)
    description = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="tasks", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
