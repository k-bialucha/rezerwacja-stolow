from django.db import models
from django.db import connection
import datetime
class Reservation(models.Model):
	reservations = models.CharField(max_length=200)
	done = models.BooleanField()
