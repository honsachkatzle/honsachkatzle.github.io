let startLayer = L.tileLayer.provider("BasemapAT.grau");

let map = L.map("map", {
    center: [48.208333, 16.373056],
    zoom: 12,
    layers: [
        startLayer
    ]
});

L.control.layers({
    "BasemapAT.grau": startLayer,
    "BasemapAT": L.tileLayer.provider("BasemapAT"),
    "BasemapAT.highdpi": L.tileLayer.provider("BasemapAT.highdpi"),
    "BasemapAT.terrain": L.tileLayer.provider("BasemapAT.terrain"),
    "BasemapAT.surface": L.tileLayer.provider("BasemapAT.surface"),
    "BasemapAT.orthofoto": L.tileLayer.provider("BasemapAT.orthofoto"),
    "BasemapAT.overlay": L.tileLayer.provider("BasemapAT.overlay"),
    "BasemapAT.orthofoto+overlay": L.layerGroup([
        L.tileLayer.provider("BasemapAT.orthofoto"),
        L.tileLayer.provider("BasemapAT.overlay")
    ])
}).addTo(map);

let walk = L.geoJson(SPAZIERGANG, {
    pointToLayer: function(point, latlng) {        //  Syntax für jedn Punkt in datenfile Pop up hinzufügen; an die die vorhandenen Punkte fügen, "function"Funktion mit zwei Parameter (),
    return L.circleMarker(latlng,{color:"red",radius: 8 });                        //neuen MArker zeichnen mit return;marker name L.circle 
        
    }

}) .addTo(map);
// , {
    // pointToLayer: function(point, latlng) {
    //  let marker = L.marker(latlng);
    //  console.log("Point", point);
    //   marker.bindPopup(`<h3>${point.properties.NAME}</h3>
    //   <p><a target="links" href="${point.properties.WEITERE_INF}">Link</a></p>
    //   ');
    //   return marker;
    // }
    // }) .addTo(map);




        //  marker.bindPopup("popup");
        // return L.circleMarker(latlang,{ color: "red", radius: 8 });
    // }
    
// }).addTo(map);
// let wandern = "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:WANDERWEGEOGD&srsName=EPSG:4326&outputFormat=json"

// let.geoJason.ajax(wander,{
//    style: function(){
        // return { color: "green", weight: 5}

    // }
// }).addTo(map);

// let heritage = "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:WELTKULTERBEOGD&srsName=EPSG:4326&outputFormat=json"

// L.geoJason.ajax(heritage,{
    // style: function()
    // return { color:“salmon"}
//   
