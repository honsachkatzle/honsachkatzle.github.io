

let map = document.querySelector("#map") //Querverbindung zur Karte welche im Skript verortet ist

//AChtung variablen immer gleich bennenen

var mymap = L.map(map).setView([-44.004674,170.477121], 13) ;

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>tributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https:/ntopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);


var marker = L.marker([[-44.004674,170.477121]]).addTo(mymap);

marker.bindPopup("<b>Lake Tekapo</b><br>a Lake Takapeo Neuseeland").openPopup();