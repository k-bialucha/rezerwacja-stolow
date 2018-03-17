from rest_framework import serializers
from testsite.models import Reservation
from testsite.models import ReservationList

class ReservationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Reservation
		fields = 'id', 'reservations', 'done'
class ReservationListSerializer(serializers.ModelSerializer):
	class Meta:
		model = ReservationList
		fields = '__all__'
