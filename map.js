// Konfigurasi Google Maps Tile Layers untuk Leaflet
var googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '&copy; Google Maps'
});

var googleHybrid = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '&copy; Google Maps'
});

var googleTerrain = L.tileLayer('http://{s}.google.com/vt?lyrs=p&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '&copy; Google Maps'
});

// Inisialisasi peta, gunakan Google Streets sebagai default
var map = L.map('map', {
    center: [-0.9492, 100.3543], // Pusat kota Padang
    zoom: 9,
    layers: [googleStreets] // Default layer
});

// Kontrol Layer (Pojok Kanan Atas)
var baseMaps = {
    "Google Streets": googleStreets,
    "Google Satellite": googleHybrid,
    "Google Terrain": googleTerrain
};

L.control.layers(baseMaps).addTo(map);

// Data destinasi wisata (Ikon Biru Standar)
var destinations = [
    { name: "Pantai Carolina", location: [-1.103, 100.363], type: "Wisata", description: "Pantai indah di Padang dengan pasir putih." },
    { name: "Air Terjun Sarasah", location: [-1.724, 100.676], type: "Hidden Gem", description: "Air terjun alami yang tersembunyi." },
    { name: "Desa Pariangan", location: [-0.455, 100.493], type: "Hidden Gem", description: "Salah satu desa terindah di dunia." },
    { name: "Danau Tarusan", location: [-1.235, 100.529], type: "Wisata", description: "Danau alami di Pesisir Selatan." },
    { name: "Bukittinggi", location: [-0.305, 100.369], type: "Wisata Populer", description: "Kota wisata terkenal dengan Jam Gadang." },
    { name: "Gunuang Padang", location: [-0.965, 100.349], type: "Wisata", description: "Pemandangan laut biru berpadu dengan legenda Siti Nurbaya." },
    { name: "Pantai Air Manis", location: [-0.989, 100.362], type: "Wisata Populer", description: "Ombak tenang dan legenda Batu Malin Kundang." },
    { name: "Goa Kelelawar Padayo", location: [-0.889, 100.452], type: "Hidden Gem", description: "Petualangan lorong alami yang eksotis." }
];

// Data Events (Kalender Budaya & Kuliner)
var eventsData = [
    { name: "Festival Rendang", location: [-0.950, 100.360], date: "15-17 Juni 2026", description: "Perayaan kuliner Minang di RTH Imam Bonjol." },
    { name: "Pacu Jawi", location: [-0.460, 100.580], date: "22-23 Juni 2026", description: "Balapan sapi tradisional di Tanah Datar." },
    { name: "Minangkabau Coffee Festival", location: [-0.935, 100.362], date: "12 Agustus 2026", description: "Pesta kopi lokal dan jajanan cafe di GOR H. Agus Salim." }
];

// Custom Marker untuk Event (Warna Merah)
var eventIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Looping untuk memunculkan Marker Destinasi
destinations.forEach(function(place) {
    var marker = L.marker(place.location).addTo(map);
    marker.bindPopup(
        "<b>" + place.name + "</b><br>" +
        "<i>" + place.type + "</i><br>" +
        place.description
    );
});

// Looping untuk memunculkan Marker Event
eventsData.forEach(function(ev) {
    var marker = L.marker(ev.location, {icon: eventIcon}).addTo(map);
    marker.bindPopup(
        "<b>📅 " + ev.name + "</b><br>" +
        "<b>Tanggal:</b> " + ev.date + "<br>" +
        ev.description
    );
});