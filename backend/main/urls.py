from django.urls import path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

urlpatterns = [
    path('', views.MainPageView.as_view()),
    path('solve_task', views.SolveTaskView.as_view()),
]
