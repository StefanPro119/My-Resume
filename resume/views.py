from django.http import HttpResponseRedirect
from django.db import IntegrityError
from django.shortcuts import render
from django.urls import reverse
from django.core.mail import send_mail


# Create your views here.


def index(request):
    return render(request, "resume/index.html")

def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        toadress = ['orlicstefan1990@gmail.com']

        send_mail(
            name,
            email,
            message,
            toadress,
        )
        return render(request, 'resume/layout.html', {
            'name': name
        })
    else:
        return render(request, "resume/layout.html")

