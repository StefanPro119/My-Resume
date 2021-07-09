from django.http import HttpResponseRedirect
from django.db import IntegrityError
from django.shortcuts import render
from django.urls import reverse

# Create your views here.

def index(request):
    return render(request, "resume/index.html")


