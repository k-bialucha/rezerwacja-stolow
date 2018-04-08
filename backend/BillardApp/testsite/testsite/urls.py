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
from django.views.generic import TemplateView
from testsite import views
from .views import ReservationView, ReservationsDetailView, UsersListView
from .views import ReservationListViewSet, ReservationPriceViewSet,TablesInfromation
from rest_framework.authtoken import views as vw
urlpatterns = [
    url(r'^admin/', admin.site.urls),
	url(r'^$', TemplateView.as_view(template_name='todo/index.html')),
	url(r'^testsite/api/$', ReservationView.as_view()),	
	url(r'^testsite/api/(?P<pk>[0-9]+)/', ReservationsDetailView.as_view()),
	url(r'^testsite/api2/(?P<pk>[0-9]+)/', ReservationListViewSet.as_view()),
	url(r'^testsite/api2/$', ReservationListViewSet.as_view()),
 	url(r'^testsite/api3/$', ReservationPriceViewSet.as_view()),
	url(r'^testsite/api4/$',TablesInfromation.as_view()),
   	url(r'^userslist/$',UsersListView.as_view()),
    	url(r'^register/$', views.Register.as_view()),
  	url(r'^change_password/$', views.ChangePassword.as_view()),
   	url(r'^login/$', vw.obtain_auth_token),

	]
