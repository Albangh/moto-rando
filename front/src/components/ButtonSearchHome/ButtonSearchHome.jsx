import React from "react";
import { Link } from 'react-router-dom';

import { Button } from "@mui/material";
import { SiGooglemaps } from 'react-icons/si'
import img1 from '../../assets/images/header3.jpg'
import img2 from '../../assets/images/img3.jpg'
import "./style.scss";


const ButtonSearchHome = () => {
  return (
    <div className="home">
      <div className="home-content">
          <SiGooglemaps className="icon" />
          <h2>RoadBooks</h2>
          <img src={img1} alt="photo paysage" />

          <h3>L’aventurier qui est en toi</h3>
          <p>Les plus belles balades sont disponibles pour préparer ta prochaine sortie d’une heure ou de plusieurs jours.</p>
          <p>Crée ton parcours. Choisis entre bitume parfait et chemins escarpés. Trace la route.</p>
      </div>

      <div className="home-content">
        <img className="mobile-img" src={img2} alt="photo paysage" />

        <Link to='/itineraires'>
          <Button className="btn-link" variant="outlined">Choisis ta balade</Button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(ButtonSearchHome);
