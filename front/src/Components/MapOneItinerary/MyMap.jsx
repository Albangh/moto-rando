import React, { useEffect, useState } from "react";
import axios from "axios";

import { MapContainer, GeoJSON, TileLayer, Marker } from "react-leaflet";
// import itinerary from "";
import "leaflet/dist/leaflet.css";

const MyMap = ({ zoom, latitude, longitude, trace }) => {
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
          className="map"
          style={{ height: "40vh", margin: 0 }}
          zoom={zoom}
          center={[latitude, longitude]}
        >
          <Marker position={mapData.features[1].geometry.coordinates}></Marker>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={mapData} />
        </MapContainer>
      )}
    </div>
  );
};

export default MyMap;
