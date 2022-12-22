from django.db import models
from cloudinary.models import CloudinaryField
from config.constants import *


class Item(models.Model): #2nd file of advance python techis material oops concept
    class Meta(object):
        db_table='item'
# why I need to add class Meta here?   
# for what STATUS is?


    STATUS = models.CharField(
    'Status', blank=False,default='inactive',max_length=50 ,null=False,db_index=True,choices=STATUS   

    ) 

    name = models.CharField(
    'Name', blank=False,default='Anonumous', null=False,max_length=150,db_index=True
    )

    price = models.IntegerField(
    'Price', blank=False,null=False,db_index=True
    )

    description = models.CharField(
    'Description', blank=False,default=0, null=False,max_length=250,db_index=True      #What means default = 0?
    )

    image = CloudinaryField(
    'Image', blank=True,null=True
    )

    created_at = models.DateTimeField(
    'Created Datetime', blank=True, auto_now_add=True
    )

    updated_at = models.DateTimeField(
    'Updated Datetime', blank=True, auto_now=True
    )