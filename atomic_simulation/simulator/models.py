from django.db import models

# Create your models here.
from django.db import models

class Atom(models.Model):
    protons = models.IntegerField()
    neutrons = models.IntegerField()
    electrons = models.IntegerField()
    element = models.CharField(max_length=50)
    stable = models.BooleanField()
