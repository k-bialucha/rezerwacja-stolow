from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from testsite.serializers import ReservationSerializer
from testsite.models import Reservation
from django.shortcuts import get_object_or_404
from django.db import connection

from testsite.models import ReservationList
from testsite.serializers import ReservationListSerializer
from rest_framework import viewsets

from testsite.models import ReservationPriceHour
from testsite.serializers import ReservationPriceSerializer


class ReservationView(APIView):
	def get(self, request):
		todos = Reservation.objects.all()
		serializer = ReservationSerializer(todos, many=True)
		return Response(serializer.data)
	def put(self, request):
		serializer = ReservationSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class ReservationsDetailView(APIView):
	def get(self, request, pk):
		testsite = get_object_or_404(Reservation, pk=pk)
		serializer = ReservationSerializer(testsite)
		return Response(serializer.data)
	def delete(self, request, pk):
		testsite = get_object_or_404(Reservation, pk=pk)
		testsite.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
class ReservationListViewSet(APIView):
	def get(self, request):
		queryset = ReservationList.objects.all().order_by('-DATE')
		serializer = ReservationListSerializer(queryset, many=True)
		return Response(serializer.data)

	def put(self, request):
		serializer = ReservationListSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReservationPriceViewSet(APIView):
	def get(self, request):
		queryset = ReservationPriceHour.objects.all()
		serializer = ReservationPriceSerializer(queryset, many=True)
		return Response(serializer.data)

	def put(self, request):
		serializer = ReservationPriceSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


