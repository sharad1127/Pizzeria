from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.OrderAdd.as_view(), name='order_add'),
]



# urlpatterns = [
#     path('', views.OrderList.as_view(),name='Order_List'),
# ]


# urlpatterns = [
#     path('', views.Order_itemList.as_view(),name='Order_item_List'),
# ]