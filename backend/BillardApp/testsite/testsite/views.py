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

from testsite.models import TABLES,auth_user
from testsite.serializers import TablesSerializer,UsersListSerializer,UserCreateSerializer

from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from rest_framework import generics, permissions
from django.views.generic import TemplateView
from rest_framework.authtoken.views import ObtainAuthToken

class CreateUserView (generics.CreateAPIView):
    model = User
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserCreateSerializer


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
         })


class ChangePassword(generics.CreateAPIView):
	permission_classes=(permissions.IsAuthenticated,)
	def post(self, request, *args, **kwargs):
		user=get_object_or_404(User,username=request.user)
		user.set_password(request.POST.get('new_password'))
		user.save()
		return Response({'detail': 'Password has been saved.'})

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
		header = {
			"Access-Control-Allow-Origin" : "*",
			"Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
		}
		return Response(data=serializer.data, headers=header)
	def delete(self, request, pk):
		print('DELETE request with PK', pk)
		testsite = get_object_or_404(ReservationList, pk=pk)
		testsite.delete()
		testsite.save()
		return Response(status=status.HTTP_204_NO_CONTENT)
	def put(self, request):
		serializer = ReservationListSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	def post(self, request):
		serializer = ReservationListSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
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

class TablesInfromation(APIView):
	def get(self, request):
		queryset=TABLES.objects.all()
		serializer = TablesSerializer(queryset, many=True)
		return Response(serializer.data)
	def put(self, request):
		serializer = TablesSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class UsersListView(APIView):

	def get(self, request):
		queryset=auth_user.objects.all()
		serializer = UsersListSerializer(queryset, many=True)
		return Response(serializer.data)
	def put(self, request):
		serializer = UsersListSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
