from django.db import models

# Create your models here.
class Task(models.Model):    
    message = models.CharField(max_length=300)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.message
    