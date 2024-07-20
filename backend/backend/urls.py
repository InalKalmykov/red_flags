"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from django.urls import path
from . import methods

urlpatterns = [
    path('get_track/', methods.get_track, name='get_track'),
    path('get_track_list/', methods.get_track_list, name='get_track_list'),
    path('create_track/', methods.create_track, name='create_track'),
    path('add_track/', methods.post_track, name='add_track'),
    path('', methods.index, name='index'),
    path('about/', methods.about, name='about'), 
    path('track/<str:name>/', methods.get_track, name='get-track'),
]
