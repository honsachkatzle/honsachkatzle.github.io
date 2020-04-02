
let startLayer = L.tileLayer.provider("OpenTopoMap");

let map = L.map("map", {
    center:[0,0],
    zoom: 2,
    layers: [
        startLayer
    ]
});

L.control.layers({
    "OpenTopoMap" : startLayer,
    "OpenStreetMap.Mapnik" : L.tileLayer.provider("OpenStreetMap.Mapnik"),
    "OpenStreetMap.BZH" : L.tileLayer.provider("OpenStreetMap.BZH"),
    "Thunderforest.OpenCycleMap": L.tileLayer.provider("Thunderforest.OpenCycleMap"),
    "OpenMapSurfer.Roads": L.tileLayer.provider("OpenMapSurfer.Roads"),
    "Esri.WorldTopoMap": L.tileLayer.provider("Esri.WorldTopoMap"),
    "Esri.NatGeoWorldMap": L.tileLayer.provider("Esri.NatGeoWorldMap")

}).addTo(map)

L.marker([0,0]).addTo(map);

console.log(CONFIRMED);
for (let index = 1; index < CONFIRMED.length; index++) {
    let row = Confirmed[i];
    let val = row[row.length-1]
    let mrk = L.marker([row[2],row[3]]).addTo(map);
    mrk.bindPopup('${reg}: ${val}');

    let r = Math.sqrt(val*s/Math)
    let circle = L.circleMarker([lat,lng],{
        radius: r
    }).addTo(map);
    circle.bindPopup('${reg}: ${val}')
    
}