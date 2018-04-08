from rest_framework import serializers
from testsite.models import Reservation
from testsite.models import ReservationList
from testsite.models import ReservationPriceHour
from testsite.models import TABLES, Eventgroup, auth_user
from django.contrib.auth.models import User
from rest_framework import permissions
from django.contrib.auth import get_user_model

from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator

class UserSerializer(serializers.ModelSerializer):
    email=serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    username = serializers.CharField(
            max_length=32,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    password = serializers.CharField(min_length=8, write_only=True)

    def create(self,validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user
    class Meta:
        model = User
        fields = ('id','username','email','password')
class ReservationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Reservation
		fields = 'id', 'reservations', 'done'
class ReservationListSerializer(serializers.ModelSerializer):
	class Meta:
		model = ReservationList
		fields = '__all__'
class ReservationPriceSerializer(serializers.ModelSerializer):
	class Meta:
		model = ReservationPriceHour
		fields = '__all__'
class TablesSerializer(serializers.ModelSerializer):
	class Meta:
		model = TABLES
		fields = '__all__'

class UsersListSerializer(serializers.ModelSerializer):
    class Meta:
        model = auth_user
        fields = ('id','password','username','email','date_joined','is_active')