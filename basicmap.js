// 35.2271° N latitude and -80.8431° W longitude
var charlotte = [35.2271, -80.8431];
var cpcc = [35.2176665, -80.8314732];
var popupContent = `
    <div style="width: 300px; height: 250px;">
        <iframe 
            src="https://www.cpcc.edu" 
            width="100%" 
            height="100%" 
            frameborder="0" 
            style="border:none;">
        </iframe>
    </div>
`;
var map = L.map('map').setView(charlotte, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var cpccmarker = L.marker(cpcc, {title: "CPCC Central Campus"}).bindPopup(popupContent).addTo(map);
