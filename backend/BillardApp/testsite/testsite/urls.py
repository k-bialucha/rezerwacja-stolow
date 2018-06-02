"""testsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url, include
from testsite import views
from .views import (
	UsersListView, 
	UserSelfInfo,
	ReservationListViewSet, 
	ReservationPriceViewSet,
	TablesInfromation,
	CustomAuthToken, 
	CreateUserView,
	UserReservationHistory,
	ReservationDetailListViewSet,
	ChangeName,
	ForgetPassword,
	
)
from django.contrib.auth import views as auth_views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
	url(r'^testsite/api2/(?P<pk>[0-9]+)/', ReservationDetailListViewSet.as_view()),
	url(r'^testsite/api2/$', ReservationListViewSet.as_view()),
 	url(r'^testsite/api3/$', ReservationPriceViewSet.as_view()),
	url(r'^testsite/api4/$',TablesInfromation.as_view()),
   	url(r'^userslist/$',UsersListView.as_view()),
    	url(r'^register/$', views.CreateUserView.as_view()),
  	url(r'^change_password/$', views.ChangePassword.as_view()),
   	url(r'^login/$', CustomAuthToken.as_view()),
 	url(r'^user_history/$', UserReservationHistory.as_view()),
  	url(r'^user_info/$', UserSelfInfo.as_view()),
	url(r'^change_name/$',ChangeName.as_view()),
	url(r'^forget_password/$',ForgetPassword.as_view()),
	
	]
