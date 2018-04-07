from django.db import models
from django.utils import timezone
from rest_framework.authtoken.models import Token
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from random import randint 


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class Eventgroup(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    start_time  = models.DateTimeField(auto_now_add=True)
    duration = models.IntegerField(default=1)
    owner = models.ForeignKey('auth.User',null=True,related_name ='group', on_delete=models.CASCADE)
    def __str__(self):
        return self.title

 #TODO-IMPLEMENT CORRECT GROUPING FUNCTION
def get_group_id(time):
    #print("jou")
    return randint(1,3)

class Reservation(models.Model):
	reservations = models.CharField(max_length=200)
	done = models.BooleanField()
class ReservationList(models.Model):
	class Meta:
		db_table = "RESERVATIONS"
	ID_RES = models.AutoField(primary_key=True)
	ID_USER = models.IntegerField() 
	ID_TABLE = models.IntegerField() 
	DATE = models.DateField()
	HOUR_FROM = models.IntegerField() 
	HOUR_TO = models.IntegerField() 
	CHARGE = models.IntegerField(blank=True) 
	CONFIRMED = models.BooleanField(default=False)
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
