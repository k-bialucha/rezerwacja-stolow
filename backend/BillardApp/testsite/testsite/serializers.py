from rest_framework import serializers
from testsite.models import Reservation
from testsite.models import ReservationList
from testsite.models import ReservationPriceHour
from testsite.models import TABLES, auth_user
from django.contrib.auth.models import User
from rest_framework import permissions
from django.contrib.auth import get_user_model

from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator


class UserSelfInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = auth_user
        fields = ('username','email','last_name','first_name')   

class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(min_length=8,write_only=True)
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    username = serializers.CharField(
        max_length=32,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
   
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'], email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        first_name = validated_data['first_name']
        last_name = validated_data['last_name']
        user.first_name = first_name
        user.last_name = last_name
        user.save()
        return user

        
    class Meta:
        model = User
        fields = ('username','password','email','last_name','first_name')

class ReservationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Reservation
		fields = 'id', 'reservations', 'done'
class ReservationListSerializer(serializers.ModelSerializer):
	class Meta:
		model = ReservationList
		fields = '__all__'
class ReservationDoneReservation(serializers.ModelSerializer):
	class Meta:
		model = ReservationList
		fields = 'ID_RES','CONFIRMED','ID_USER'

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