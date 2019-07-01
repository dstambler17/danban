from rest_framework import serializers
from danban.models import Task

# Lead Serializer
class TaskSerializer(serializers.ModelSerializer):
  class Meta:
    model = Task 
    fields = '__all__'
