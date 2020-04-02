
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