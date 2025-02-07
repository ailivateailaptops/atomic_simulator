
# simulator/urls.py
from django.urls import path
from .views import ElementInfo, atom_simulation

urlpatterns = [
    path('', atom_simulation, name='atom_simulation'),
    path('api/element/<int:protons>/<int:neutrons>/<int:electrons>/', ElementInfo.as_view(), name='element_info'),
]