import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapBox.scss";

const latt = 47;
const long = 2;
const zoom = 6;

const MapBox = ({ mapData }) => {
  const [mapBoxData, setMapBoxData] = useState("");
  useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  useEffect(() => {
    axios.get(`${mapData[0].itinerary_trace}`).then(({ data }) => {
      setMapBoxData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(mapBoxData);
  return (
    
    <>
      <MapContainer
        className="map"
        style={{ height: "60vh" }}
        zoom={zoom}
        center={[latt, long]}
      >
        <TileLayer
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
          url="https://api.mapbox.com/styles/v1/albandev/cl10kfcjr005215p69m1mmg6q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxiYW5kZXYiLCJhIjoiY2wxMGtqN2Y5MDd5MzNmbWdidXk0czh3YSJ9.PIWasy9XjGpaBv7aljRKjA"
        />
        <>
          {mapData.map((point) => (
            <Marker
              key={point.itinerary_id}
              position={[
                point.districts[0].district_latitude,
                point.districts[0].district_longitude,
              ]}
            >
              <Popup>
                <Link to={`/itineraire/${point.itinerary_id}`}>
                  {point.itinerary_title}
                </Link>
              </Popup>
            </Marker>
          ))}
        </>
      </MapContainer>
    </>
  );
};

export default MapBox;
