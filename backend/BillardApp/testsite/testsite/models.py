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
	def __unicode__(self):
		return self.ID_RES

class ReservationPriceHour(models.Model):
		class Meta:
			db_table = "Price_list_hour"
		Id_club = models.AutoField(primary_key=True)
		week = models.IntegerField()
		weekend = models.IntegerField()
		week_aft = models.IntegerField()
		def __unicode__(self):
			return self.Id_club
class TABLES(models.Model):
	class Meta:
		db_table = "TABLES"
	ID_TABLE = models.AutoField(primary_key=True)
	NUM_OF_SEATS = models.IntegerField()
	ID_TYPE = models.IntegerField()
	def __unicode__(self):
		return self.ID_TABLE

class TABLES_TYPE(models.Model):
	class Meta:
		db_table = "TABLES_TYPE"
	ID_TYPE = models.AutoField(primary_key=True)
	TYPE = models.CharField(max_length=45)
	def __unicode__(self):
		return self.ID_TYPE

class RezView(models.Model):
	class Meta:
		db_table = "Rez"
	Id_table = models.IntegerField(primary_key=True)
	Date = models.DateField()
	Hour_From = models.IntegerField()
	Hour_To = models.IntegerField()
	def __unicode__(self):
		return self.Id_table

class UsersTable(models.Model):
	class Meta:
		db_table = "USERS"
	ID_USER = models.AutoField(primary_key=True)
	NAME = models.CharField(max_length=45)
	SURNAME = models.CharField(max_length=45)
	EMAIL = models.CharField(max_length=45)
	def __unicode__(self):
		return self.ID_USER
