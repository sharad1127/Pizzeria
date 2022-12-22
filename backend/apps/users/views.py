from django.shortcuts import render
from typing import Generic
from rest_framework import generics
from .models import User
from .serializers import UserSerializer, UserSignUpSerializer, UserSignInSerializer
from .mixins import CustomLoginRequiredMixin
from rest_framework.response import Response


# Create your views here.
class UserSignUp(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignUpSerializer

class UserSignIn(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignInSerializer

class UserCheckLogin(CustomLoginRequiredMixin, generics.RetrieveAPIView):
    def get(self,request, *args, **kwargs):
        serializer = UserSerializer([request.login.user], many = True)
        return Response(serializer.data[0])   

class UserList(generics.ListAPIView):
    queryset = User.objects.all()[:10]
    serializer_class = UserSerializer

