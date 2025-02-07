from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from mendeleev import element

class ElementInfo(APIView):
    def get(self, request, protons, neutrons, electrons):
        try:
            elem = element(protons)
            element_name = elem.name
            element_symbol = elem.symbol

            isotope_mass = protons + neutrons
            isotope = f"{element_name}-{isotope_mass}"

            charge = protons - electrons
            charge_str = f"{charge:+}" if charge != 0 else "Neutral"

            return Response({
                "element": element_name,
                "symbol": element_symbol,
                "isotope": isotope,
                "charge": charge_str
            })
        except Exception as e:
            return Response({"error": f"Error: {str(e)}"}, status=400)

def atom_simulation(request):
    # Renders the HTML page where the atom simulation is displayed
    return render(request, 'simulator/index.html')
