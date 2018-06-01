from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from django.shortcuts import get_object_or_404
from django.db import connection
from django.contrib.auth.models import User
from django.views.generic import TemplateView

from django.core.mail import send_mail
from django.conf import settings

from rest_framework import (
	status,
	generics, 
	permissions,
	viewsets,
)
from testsite.serializers import (
	ReservationListSerializer,
	ReservationSerializer,
	ReservationPriceSerializer,
	TablesSerializer,
	UsersListSerializer,
	UserCreateSerializer, 
	UserSelfInfoSerializer,
	ReservationDoneReservation,
)
from testsite.models import (
ReservationList,
ReservationPriceHour,
TABLES,
auth_user,
Reservation,
)



class CreateUserView (generics.CreateAPIView):
    model = User
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserCreateSerializer

class UserSelfInfo (APIView):
	permission_classes=(permissions.IsAuthenticated,)
	def get(self, request, *args, **kwargs):
		user=get_object_or_404(User,username=request.user)
		history=auth_user.objects.filter(id=user.pk)
		serializer = UserSelfInfoSerializer(history, many=True)
		return Response(serializer.data)



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
		user.set_password(request.data.get('new_password'))
		user.save()
		return Response({'detail': 'Password has been saved.'})

class ForgetPassword(generics.CreateAPIView):
	permission_classes = (permissions.AllowAny,)
	def post(self,request,*args,**kwargs):
		user=get_object_or_404(User,username=request.data.get('username'))
		subject = 'Przypomnienie hasla na bilardapp'
		from_email= settings.EMAIL_HOST_USER
		to_email = [user.email]
		password = User.objects.make_random_password()
		user.set_password(password)
		signup_message = "Przypomnienie hasła na bilardapp.\nWygenerowaliśmy nowe hasło, zmień je po zalogowaniu do aplikacji w zakladce Zmień Hasło\nNowe Hasło: %s \n Wiadomość wygenerowana automatycznie, prosimy na nią nie odpowiadać.\nPozdrawiamy,\nBilardApp." % (password)
		send_mail(subject=subject,message=signup_message,from_email=from_email,recipient_list=to_email, fail_silently=False)
		user.save()
		return Response({'detail': 'Password has been changed.'})
	def put(self,request,*args,**kwargs):
		user=get_object_or_404(User,username=request.data.get('username'))
		subject = 'Przypomnienie hasla na bilardapp'
		from_email= settings.EMAIL_HOST_USER
		to_email = [user.email]
		password = User.objects.make_random_password()
		user.set_password(password)
		signup_message = "Przypomnienie hasła na bilardapp.\nWygenerowaliśmy nowe hasło, zmień je po zalogowaniu do aplikacji w zakladce Zmień Hasło\nNowe Hasło: %s \n Wiadomość wygenerowana automatycznie, prosimy na nią nie odpowiadać.\nPozdrawiamy,\nBilardApp." % (password)
		send_mail(subject=subject,message=signup_message,from_email=from_email,recipient_list=to_email, fail_silently=False)
		user.save()
		return Response({'detail': 'Password has been changed.'})

		

class ChangeName(generics.CreateAPIView):
	permission_classes=(permissions.IsAuthenticated,)
	def post(self,request,*args,**kwargs):
		user=get_object_or_404(User,username=request.user)
		user.first_name = request.data.get('first_name')
		user.last_name = request.data.get('last_name')
		user.save()
		return Response({'detail': 'First Name and Last name has been saved', 'user_id': user.pk, 'Username': user.username})

class UserReservationHistory(generics.CreateAPIView):
	permission_classes=(permissions.IsAuthenticated,)
	def get(self, request):
		user=get_object_or_404(User,username=request.user)
		history=ReservationList.objects.filter(ID_USER=user.pk)
		serializer = ReservationListSerializer(history, many=True)
		return Response(serializer.data)

class ReservationView(APIView):
	permission_classes = (permissions.AllowAny,)
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
	permission_classes = (permissions.AllowAny,)
	def get(self, request, pk):
		testsite = get_object_or_404(Reservation, pk=pk)
		serializer = ReservationSerializer(testsite)
		return Response(serializer.data)
	def delete(self, request, pk):
		testsite = get_object_or_404(Reservation, pk=pk)
		testsite.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)

class ReservationDetailListViewSet(APIView):
	def get(self, request, pk):
		testsite = get_object_or_404(ReservationList, pk=pk)
		serializer = ReservationListSerializer(testsite)
		return Response(serializer.data)
	def delete(self, request, pk):
		testsite = get_object_or_404(ReservationList, pk=pk)
		testsite.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
	def put(self, request, pk):
		print('Request PUT:', pk)
		serializer = ReservationListSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	def patch(self,request,pk):
		testsite=get_object_or_404(ReservationList,pk=pk)
		serializer=ReservationDoneReservation(testsite,data={'CONFIRMED': 'True'},partial=True)
		if serializer.is_valid():
			serializer.save()
			id_usera=serializer.data['ID_USER']
			user=get_object_or_404(User,id=id_usera)
			id_rezerwacji=serializer.data['ID_RES']
			to_email=[user.email]
			from_email=settings.EMAIL_HOST_USER
			subject="Twoja rezerwacja nr. %s została anulowana przez administratora" % (id_rezerwacji)
			message_to_send="Bardzo przepraszamy, ale twoja rezerwacja\nnumer=%s\nzostała anulowana przez właściela klubu.\n W celu dalszych informacji prosimy o kontakt telefoniczny: 111-111-111." % (id_rezerwacji)
			send_mail(subject=subject,message=message_to_send,from_email=from_email,recipient_list=to_email, fail_silently=False)
			return Response(status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class ReservationListViewSet(APIView):
	#permission_classes = (permissions.AllowAny,)
	permission_classes=(permissions.IsAuthenticated,)
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
	def put(self, request,*args,**kwargs):
		serializer = ReservationListSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			stol = request.data.get('ID_TABLE')
			date = request.data.get('DATE')
			h_from=request.data.get('HOUR_FROM')
			h_to= request.data.get('HOUR_TO')
			user = get_object_or_404(User,username=request.user)
			subject = 'Potwierdzenie rezerwacji dokonanej na bilardapp'
			from_email= settings.EMAIL_HOST_USER
			to_email = [user.email]
			id_res = serializer.data['ID_RES']
			oplata_get = get_object_or_404(ReservationList,pk=id_res)
			serializer = ReservationListSerializer(oplata_get)
			oplata = serializer.data['CHARGE']
			imie = user.first_name
			signup_message = "Dziękujemy %s za dokonanie rezerwacji!\nPoniżej znajdują się informacje o rezerwacji:\n ID Rezerwacji: %d,\n Stół: %s, \n Data: %s,\n Godzina od: %s do %s,\n Opłata: %s \nZapraszamy do klubu 15 minut przed dokonaną rezerwacją w celu jej potwierdzenia.\nDziekujemy i zapraszamy ponownie do skorzystania z naszych usług.\nProsimy nie odpowiadać na ten email.\nPozdrawiamy,\nBilardApp" % (imie,id_res,stol,date,h_from,h_to, oplata)  
			send_mail(subject=subject,message=signup_message,from_email=from_email,recipient_list=to_email, fail_silently=False)

			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	def post(self, request):
		serializer = ReservationListSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			stol = request.data.get('ID_TABLE')
			date = request.data.get('DATE')
			h_from=request.data.get('HOUR_FROM')
			h_to= request.data.get('HOUR_TO')
			user = get_object_or_404(User,username=request.user)
			subject = 'Potwierdzenie rezerwacji dokonanej na bilardapp'
			from_email= settings.EMAIL_HOST_USER
			to_email = [user.email]
			id_res = serializer.data['ID_RES']
			oplata_get = get_object_or_404(ReservationList,pk=id_res)
			serializer = ReservationListSerializer(oplata_get)
			oplata = serializer.data['CHARGE']
			imie = user.first_name
			signup_message = "Dziękujemy %s za dokonanie rezerwacji!\nPoniżej znajdują się informacje o rezerwacji:\n ID Rezerwacji: %d,\n Stół: %s, \n Data: %s,\n Godzina od: %s do %s,\n Opłata: %s \nZapraszamy do klubu 15 minut przed dokonaną rezerwacją w celu jej potwierdzenia.\nDziekujemy i zapraszamy ponownie do skorzystania z naszych usług.\nProsimy nie odpowiadać na ten email.\nPozdrawiamy,\nBilardApp" % (imie,id_res,stol,date,h_from,h_to, oplata)  
			send_mail(subject=subject,message=signup_message,from_email=from_email,recipient_list=to_email, fail_silently=False)
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReservationPriceViewSet(APIView):
	permission_classes = (permissions.AllowAny,)
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
	permission_classes = (permissions.AllowAny,)
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
	permission_classes = (permissions.AllowAny,)
	def get(self, request):
		queryset=auth_user.objects.all()
		serializer = UsersListSerializer(queryset, many=True)
		return Response(serializer.data)
