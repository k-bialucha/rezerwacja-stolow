from rest_framework import serializers
from testsite.models import Reservation
from testsite.models import ReservationList
from testsite.models import ReservationPriceHour
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
