//  3.15 N 73 E
var coordinates = [3.15, 73];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.circle(coordinates, {"title": "Hello from the Maldives!",
                      color: 'black',
                      fillColor: '#e6ae17',
                      fillOpacity: 0.8,
                      radius: 90}).bindPopup("<p>Hello From the Maldives!</p>").addTo(map);
