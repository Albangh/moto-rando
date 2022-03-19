import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import apiAxios from "../../../request";

import "./itineraryForm.scss";


const ADD_ITINERARY = "/itineraires";
// C'est pour créer un itinéraire
const RegistrationItinerary = ({ userId }) => {
  const [title, setTitle] = useState("");
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [kilometer, setKilometer] = useState();
  const [highway, setHighway] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [map, setMap] = useState(null);
  const [curve, setCurve] = useState();
  const [valueDistrict, setValueDistrict] = useState("");
  const [district, setDistrict] = useState([]);

  const navigate = useNavigate();

  const handleChangeDistrict = (event) => {
    setValueDistrict(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await apiAxios.get("/regions");
      setDistrict(response.data);
      console.log("data", response.data);
    }
    fetchData();
  }, []);

  console.log(userId);

  const send = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("map", map);
    data.append("photo", file);
    data.append("id", userId);
    data.append("title", title);
    data.append("curve", curve);
    data.append("hour", hour);
    data.append("minute", minute);
    data.append("kilometer", kilometer);
    data.append("highway", highway);
    data.append("description", description);
    data.append("district", valueDistrict);

    try {
      const response = await apiAxios.post(ADD_ITINERARY, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);

      console.log(JSON.stringify(response.data));

      // clear
      setTitle("");
      setCurve();
      setHour();
      setMinute();
      setKilometer();
      setHighway(false);
      setDescription("");
      setFile(null);
      setMap(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h2>Créer un itineraire</h2>

      <form
        action="/itineraires/:id"
        encType="multipart/form-data"
        className="itinerary-form"
        onSubmit={send}
      >
        <label htmlFor="title">Titre de l'itinéraire</label>
        <input
          id="title"
          type="text"
          placeholder="Titre de l'itinéraire"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="district">Région</label>
        <select
          className="form-select"
          value={valueDistrict}
          onChange={handleChangeDistrict}
        >
          <option>Selectionnez votre Région </option>
          {district.map((region, index) => (
            <option key={index} id={region.id} value={region.id}>
              {region.name}
            </option>
          ))}
        </select>

        <label htmlFor="map">
          Votre itinéraire.
          <div>'.geojson' uniquement.</div>
        </label>
        <input
          type="file"
          id="map"
          accept=".geojson"
          onChange={(event) => {
            const file = event.target.files[0];
            setMap(file);
          }}
        />

        <label htmlFor="root">Sinuosité de la route</label>
        <input
          id="root"
          type="number"
          min="1"
          max="5"
          placeholder="Type de route"
          value={curve}
          onChange={(e) => setCurve(e.target.value)}
        />

        <label htmlFor="duration">Durée de l'itinéraire</label>

        <input
          id="hour"
          placeholder="Heures"
          type="number"
          min="0"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        />
        <input
          id="minute"
          placeholder="Minutes"
          type="number"
          min="0"
          max="59"
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
        />

        <label htmlFor="km">Nombre de kilomètres</label>
        <input
          id="km"
          type="number"
          min="1"
          value={kilometer}
          onChange={(e) => setKilometer(e.target.value)}
        />

        <label htmlFor="highway">Trajet avec autoroute</label>
        <input
          type="checkbox"
          id="highway"
          value={highway}
          onChange={(e) => setHighway(e.target.value)}
        />

        <label htmlFor="description">
          Description de votre itinéraire (point de vue, endroit friendly
          motard,...)
        </label>
        <textarea
          id="description"
          type="text"
          value={description}
          placeholder="Description de l'itinéraire "
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="photo">Vos plus belles photos</label>
        <input
          type="file"
          id="photo"
          accept=".jpg, .jpeg"
          multiple
          name="file"
          onChange={(event) => {
            const file = event.target.files[0];
            setFile(file);
          }}
        />

        <button className="form__btn-submit" target="'/itineraires'">
          Valider l'itinéraire
        </button>
      </form>
    </div>
  );
};

export default React.memo(RegistrationItinerary);
