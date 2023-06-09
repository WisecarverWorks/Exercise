from datetime import date
from enum import auto
from django.db import models
from django.forms import DateField, DateTimeField
from authentication.models import User


class Muscle_Groups(models.Model):
    name = models.CharField(max_length=100, null=True)
    def __str__(self):
        return self.name

class Movements(models.Model):
    name = models.CharField(max_length=100, null=True)
    muscle_group = models.ForeignKey(Muscle_Groups, on_delete=models.CASCADE)
    def __str__(self):
        return self.name


class Workout(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    muscle_group = models.ForeignKey(Muscle_Groups, on_delete=models.CASCADE, null=True )
    movement = models.ForeignKey(Movements, on_delete=models.CASCADE, null=True)
    sets = models.IntegerField()
    reps = models.IntegerField()
    weight = models.IntegerField(null=True)
    total_weight = models.IntegerField(null=True)
    date = models.DateField(null=True)
    def __all__(self):
        return self.date
    
    

class Full_Workout(models.Model):
    workouts = models.ManyToManyField(Workout)
    date = models.DateField(null=True)