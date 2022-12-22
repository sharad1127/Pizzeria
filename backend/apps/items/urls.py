from django.urls import path
from . import views


urlpatterns = [
    path('', views.ItemList.as_view(),name='Item_List'),
]

