# Atomic Structure Simulation

This project is an interactive atomic structure simulation that allows users to visualize atoms dynamically. It includes electron orbits, nucleus representation, ionization states, and element identification using physics-based calculations.
The simulation is built using HTML, JavaScript, and Django as the backend.

## Features

- Dynamic Atomic Visualization: Users can add/remove protons, neutrons, and electrons, and see changes in real-time.
- Electron Orbit Simulation: Electrons move in elliptical orbits based on quantum shells.
- Element Identification: Determines the element based on the number of protons using the mendeleev Python package.
- Ionization & Stability Detection: Displays whether the atom is neutral, ionized, or unstable.
- Quiz Feature (Upcoming): A quiz mode to test knowledge about atomic structures.

## Installation
1. Clone the Repository
   git clone https://github.com/your-username/atomic-simulation.git
   cd atomic-simulation
2. Install Dependencies:Make sure you have Python 3.x and Django installed.
   pip install -r requirements.txt
   
   Create requirements.txt file and add the following libraries to your requirements.txt file:
       Django
       mendeleev
       Django
       numpy
3. Run the Django Server
     python manage.py runserver
  Open the frontend in a browser:
      http://127.0.0.1:8000/

## Usage
1. Open the simulation web page.
2. Use the + / - buttons to increase or decrease protons, neutrons, and electrons.
3. The system will:
    - Identify the element based on protons.
    - Show whether the atom is stable, ionized, or an isotope.
    - Display elliptical orbits for electrons.
4. Use the quiz mode (if enabled) to test atomic knowledge.

## File Structure

    |-- atomic_simulation/     # Main Django project directory
    |   |-- static/            # Static files (JS, CSS, images)
    |   |-- templates/         # HTML files
    |   |-- views.py           # Backend logic
    |   |-- urls.py            # URL routing
    |   |-- settings.py        # Django settings
    |
    |-- manage.py              # Django management script
    |-- requirements.txt       # Python dependencies
    |-- README.md              # Project documentation

## Backend API Endpoints
1. Endpoint	Method	Description:
    /api/element/<protons>/<neutrons>/<electrons>/
2. Method :	GET
3. Description:	Returns element data based on atomic numbers

## Dependencies
    Backend: Django, Mendeleev
    Frontend: HTML, CSS, JavaScript (Canvas API)
    Physics & Data Handling: NumPy, Mendeleev (for element identification)

## License

   This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Physics Data: Mendeleev Python Library
- Visualization: HTML5 Canvas API
