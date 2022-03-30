

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import apiAxios from "../../../request";
import { Button, Checkbox, FormControlLabel, Input, MenuItem, TextField } from "@mui/material";
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
    <>

      <div className="header-itinerary">
        <h1 className="detail-title">Créer un itineraire</h1>
      </div>

      <div className="form">
        <h3 className="subtitle">Veuillez remplir le formulaire ci-dessous</h3>
        <form
          action="/itineraires/:id"
          encType="multipart/form-data"
          className="itinerary-form"
          onSubmit={send}
        >
          <Box
            sx={{
              width: 600,
              maxWidth: '100%',
            }}
          >
            <TextField
              required
              fullWidth
              className="signup-input"
              color="warning"
              label="Titre"
              variant="outlined"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
              required
              fullWidth
              className="signup-input"
              color="warning"
              variant="outlined"
              select
              label="Régions"
              value={valueDistrict}
              onChange={handleChangeDistrict}
              helperText="Selectionnez votre Région"
            >
              {district.map((option) => (
                <MenuItem key={option} id={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              fullWidth
              className="signup-input"
              color="warning"
              variant="outlined"
              id="outlined-number"
              label="Sinuosité de la route 1-5"
              type="number"
              value={curve}
              onChange={(e) => setCurve(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: "0", max: "5", step: "1" } }}
            />

            <TextField
              required
              fullWidth
              className="signup-input"
              color="warning"
              variant="outlined"
              id="outlined-number"
              label="Nombre de kilomètres"
              type="number"
              value={kilometer}
              onChange={(e) => setKilometer(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: "0", max: '5000', step: "1" } }}
            />

            <h3 className="subtitle">Durée de l'itinéraire</h3>

            <TextField
              required
              fullWidth
              className="signup-input"
              color="warning"
              variant="outlined"
              id="outlined-number"
              label="Heures"
              type="number"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: "0", step: "1" } }}
            />

            <TextField
              required
              fullWidth
              className="signup-input"
              color="warning"
              variant="outlined"
              id="outlined-number"
              label="Minutes"
              type="number"
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: "0", max: '59', step: "1" } }}
            />

            <h3 className="subtitle">Informations supplémentaires</h3>

            <TextField
              required
              fullWidth
              className="signup-input"
              color="warning"
              label="Description"
              variant="outlined"
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <FormControlLabel control={<Checkbox color="success" value={highway}
              onChange={(e) => setHighway(e.target.checked)} />} label="Trajet avec autoroute"

            />

            <TextField
              required
              fullWidth
              className="signup-input"
              color="warning"
              variant="outlined"
              type="file"
              id="map"
              accept=".geojson"
              onChange={(event) => {
                const file = event.target.files[0];
                setMap(file);
              }}
              helperText="Selectionnez votre GEOJson"
            />

            <TextField
              required
              fullWidth
              className="signup-input"
              color="warning"
              variant="outlined"
              type="file"
              accept=".jpg, .jpeg"
              multiple
              name="file"
              onChange={(event) => {
                const file = event.target.files[0];
                setFile(file);
              }}
              helperText="Vos plus belles photos"
            />
          </Box>

          <button className="btn-signup" variant="outlined">Valider</button>

        </form>
      </div>
    </>
  );
};

export default React.memo(RegistrationItinerary);
