let startLayer = L.tileLayer.provider("BasemapAT.grau");

let map = L.map("map", {
    center: [48.208333, 16.37056],
    zoom: 12,
    layers: [
        startLayer
    ]
});

let walkGroup = L.featureGroup().addTo(map); //neue feature group erzeugen um genau den gewollten Kartenausschnitt zu bekommen    
let sightGroup = L.markerClusterGroup().addTo(map);
let heritageGroup = L.featureGroup().addTo(map);

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
}, {
    "Stadtspaziergang (Punkte)": sightGroup,
    "Wanderungen": walkGroup,
    "Weltkulturerbe": heritageGroup
}).addTo(map);


let walkUrl = "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SPAZIERPUNKTOGD &srsName=EPSG:4326&outputFormat=json";
let sightUrl = "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SPAZIERPUNKTOGD &srsName=EPSG:4326&outputFormat=json";

let sights = L.geoJson.ajax(sightUrl, {

    pointToLayer: function (point, latlng) {
        let icon = L.icon({
            iconUrl: 'icons/sight.svg', // url is required
            iconSize: [32, 32]
        });
        let marker = L.marker(latlng, {
            icon: icon
        });
        // console.log("Point", point);
        marker.bindPopup(`<h3>${point.properties.NAME}</h3>
        <p>${point.properties.BEMERKUNG}</p>
        <p><b></b>Adresse:</b> ${point.properties.ADRESSE}</p>
       <p><a target="links" href="${point.properties.WEITERE_INF}">Link</a></p>

    `);
        return marker;



    }

});


sights.on("data:loaded", function () {
    sightGroup.addLayer(sights);
    console.log('data loaded!');
    map.fitBounds(sightGroup.getBounds());
});




let wandern = " https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:WANDERWEGEOGD&srsName=EPSG:4326&outputFormat=json";

L.geoJson.ajax(wandern, {
//    style: function () {
//        return {
            // color: "green",
            // weight: 5
        // };
    // }
    style: function (feature) {
        if (feature.properties.TYP = "1") {
            return {
                color: "black",
                dashArray: "4,7"
            };
        } else if (feature.properties.TYP = "2") {
            return {
                color: "black",
                dashArray: "1,12"
            };
        }
}

}).addTo(walkGroup);

let heritage = "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:WELTKULTERBEOGD&srsName=EPSG:4326&outputFormat=json";

 L.geoJson.ajax(heritage, {
    // style: function (feature) {
        // return {
            // (feature.properties.TYP == "1")}{;
            // color: "red",
            // fillOpacity: 0.3
        // };
    // },
    // onEachFeature: function (feature, layer) {
        // console.log("Feature: ", feature);
        // layer.bindPopup(`<h3>${feature.properties.NAME}</h3>
        //  <p>${feature.properties.INFO}</p>
        //  `);
    // }

    style: function (feature) {                      //mit if/else Abfrage typen zuweisen lassen und ausgeben
        if (feature.properties.TYP = "1") {          // functioniert das hervorheben der layer da sie sich überlappen?
            return {
                color: "red",
                fillOpacity: 0.3
            };
         
        } else if (feature.properties.TYP == "2") {
            return {
                color: "yellow",
                fillOpacity: 0.3,
               
            };
        }
},
onEachFeature: function (feature, layer) {                    //popup für namen/info für das jeweilige Object zuweisen
    console.log("Feature: ", feature);
    layer.bindPopup(`<h3>${feature.properties.NAME}</h3>
        <p>${feature.properties.INFO}</p>
        `);
}
}).addTo(heritageGroup);

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