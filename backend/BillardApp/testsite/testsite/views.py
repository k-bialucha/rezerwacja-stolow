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
from testsite.serializers import TablesSerializer,UsersListSerializer



from testsite.serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from rest_framework import generics, permissions
from django.views.generic import TemplateView



class Register(generics.CreateAPIView):
	permission_classes = (permissions.AllowAny,)

	def post(self, request, *args, **kwargs):
		#New USer
		username = request.POST.get('username')
		email = request.POST.get('email')
		password =request.POST.get('password')
		first_name=request.POST.get('first_name')
		last_name = request.POST.get('last_name')
		user = User.objects.create_user(username, email, password)
		user.first_name = first_name
		user.last_name = last_name
		user.save()

		#GenerateToken
		token=Token.objects.create(user=user)

		return Response({'detail': 'User has been created with Token: ' + token.key})


class ChangePassword(generics.CreateAPIView):
	permission_classes=(permissions.IsAuthenticated,)
	def post(self, request, *args, **kwargs):
		user=get_object_or_404(User,username=request.user)
		user.set_password(request.POST.get('new_password'))
		user.save()
		return Response({'detail': 'Password has been saved.'})
class UserCreate(APIView):
    """ 
    Creates the user. 
    """

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                token = Token.objects.create(user=user)
                json = serializer.data
                json['token'] = token.key
                return Response(json, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
