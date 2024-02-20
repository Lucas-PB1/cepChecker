{{-- Modules --}}
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8Ywy5aiOVkqsNEjT-Vgg517cVzWyPtPM&callback=initMap&libraries=&v=weekly" defer></script>

<script src="{{ url('assets/js/functions.js') }}"></script>
<script src="{{ url('assets/js/api.js') }}"></script>
<script src="{{ url('assets/js/exec.js') }}"></script>

@vite('resources/js/app.js')

@yield('scripts')
