from django.db import models

# Create your models here.
class User(models.Model):
    class Meta(object):
        db_table = 'user'

    user_name = models.CharField(
        'Username', blank=False, max_length= 40, db_index= True,
    ) 
    password = models.CharField(
        'Password', blank=False, max_length= 40, db_index=True,
    )
    email = models.CharField(
        'email', blank=False, max_length= 40, db_index=True,
    )

    created_at = models.DateTimeField (
        'time', blank= True, auto_now=True, 
    )

    updated_at = models.DateTimeField (
        'update', blank= True, auto_now=True, 
    )

    token = models.CharField(
        'token', blank= False, max_length=200, db_index=True,
    )

    token_expires_at = models.DateTimeField(
        'token_expires_at', blank=True, 
    )

