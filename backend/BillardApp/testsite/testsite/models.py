from django.db import models
from django.utils import timezone

class Reservation(models.Model):
	reservations = models.CharField(max_length=200)
	done = models.BooleanField()
class ReservationList(models.Model):
	class Meta:
		db_table = "RESERVATIONS"
	ID_RES = models.AutoField(primary_key=True)
	ID_USER = models.IntegerField() 
	ID_TABLE = models.IntegerField() 
	DATE = models.DateField(auto_now_add=True)
	HOUR_FROM = models.IntegerField() 
	HOUR_TO = models.IntegerField() 
	CHARGE = models.IntegerField() 
	CONFIRMED = models.BooleanField()
