from rest_framework import serializers
from testsite.models import Reservation
from testsite.models import ReservationList
from testsite.models import ReservationPriceHour
from testsite.models import TABLES, Eventgroup
from django.contrib.auth.models import User
from rest_framework import permissions
from django.contrib.auth import get_user_model

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
class UserSerializer(serializers.ModelSerializer):
    ## password = serailizers.CharField(write_only=True)
    reservation= serializers.PrimaryKeyRelatedField(many=True, queryset=ReservationList.objects.all())
    class Meta:
        model = User
        fields = ('id', 'username','password', 'reservation')
        write_only_fields = ('password',)

class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    #images  = serializers.PrimaryKeyRelatedField(many=True, queryset=Img.objects.all())
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

        
    class Meta:
        model = User
        fields = ('username','password')
class GroupSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Eventgroup
        fields = ( 'id','title','start_time', 'duration', 'owner')     
