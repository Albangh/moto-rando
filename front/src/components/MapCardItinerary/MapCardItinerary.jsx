import React, { useEffect, useState } from "react";
import axios from "axios";

import { MapContainer, GeoJSON, TileLayer, Marker } from "react-leaflet";
// import itinerary from "";
import "leaflet/dist/leaflet.css";

const MapCardItinerary = ({ zoom, latitude, longitude, trace }) => {
  const [mapData, setMapData] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axios.get(`${trace}`).then(({ data }) => {
      setMapData(data);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("data", mapData);

  useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);
  console.log(zoom, latitude, longitude);
  return (
    <div>
      {!isLoading && mapData && (
        <MapContainer
          zoom={7}
          center={[latitude, longitude]}
        >
          <Marker position={mapData.features[1].geometry.coordinates}></Marker>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/albandev/cl10kfcjr005215p69m1mmg6q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxiYW5kZXYiLCJhIjoiY2wxMGtqN2Y5MDd5MzNmbWdidXk0czh3YSJ9.PIWasy9XjGpaBv7aljRKjA"
          />
          <GeoJSON data={mapData} />
        </MapContainer>
      )}
    </div>
  );
};

export default MapCardItinerary;
