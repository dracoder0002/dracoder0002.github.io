//  3.15 N 73 E
var coordinates = [4.1750, 73.5090];
var popupcode = `<center>
<h3>Hello from the Maldives!</h3>
<iframe width="200" height="100" src="https://www.youtube.com/embed/1fT9pCa6r5M?si=_TVKeeNP6oKpIF_T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<p>
<a href="travel.html">Click here to go to my travel page</a>
</p>
</center>`;
var marker1 = [3.61738, 72.71727];
var markercode = `<center>
<h3>The Muraka & Ithaa Undersea Restaurant</h3>
<a href="travel.jpg">
<img src="travel.jpg" title="The Muraka & Ithaa Undersea Restaurant" height="100" width="200">
</a>
</center>`
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.circle(coordinates, {"title": "Hello from the Maldives!",
                      color: '#e6ae17',
                      fillColor: '#e6ae17',
                      fillOpacity: 0.8,
                      radius: 90}).bindPopup(popupcode).addTo(map);
L.marker(marker1).bindPopup(markercode).addTo(map);
