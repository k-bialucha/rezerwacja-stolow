from rest_framework import serializers
from testsite.models import Reservation

class ReservationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Reservation
		fields = 'id', 'reservations', 'done'
