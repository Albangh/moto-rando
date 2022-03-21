import React from "react";

import { Link } from "@mui/material";

import Alban from "../../assets/images/Maxime.webp";
import Elodie from "../../assets/images/Elodie.webp";
import Maxime from "../../assets/images/Alban.webp";
import Karine from "../../assets/images/Karine.webp";
import Yann from "../../assets/images/Yann.webp";

import "./team.scss";


import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";

const Team = () => {
  return (
    <div className="team">
      <div className="header-itinerary">
        <h1 className="detail-title">TEAM MOTO'RANDO</h1>
      </div>

      <div className="team__card">
        <div className="team__card-id">
          <img width="200px" height="200px" src={Karine} alt={Karine} />
          <div className="card__content">
            <h3>Karine</h3>
            <h5>Product Owner</h5>
            <p>Développeur Back</p>
            <div className="id-social">
              <Link to="#">
                <TiSocialFacebookCircular className="fb" />
              </Link>
              <Link to="#">
                <TiSocialLinkedinCircular className="lk" />
              </Link>
              <Link to="#">
                <TiSocialTwitterCircular className="twitter" />
              </Link>
            </div>
          </div>
        </div>

        <div className="team__card-id">
          <img width="200px" height="200px" src={Alban} alt={Alban} />
          <div className="card__content">
            <h3>Alban</h3>
            <h5>Lead Dev Front</h5>
            <p>Développeur Front</p>
            <div className="id-social">
              <Link to="#">
                <TiSocialFacebookCircular className="fb" />
              </Link>
              <Link to="#">
                <TiSocialLinkedinCircular className="lk" />
              </Link>
              <Link to="#">
                <TiSocialTwitterCircular className="twitter" />
              </Link>
            </div>
          </div>
        </div>

        <div className="team__card-id">
          <img width="200px" height="200px" src={Maxime} alt={Maxime} />
          <div className="card__content">
            <h3>Maxime</h3>
            <h5>Lead Dev Back</h5>
            <p>Développeur Back</p>
            <div className="id-social">
              <Link to="#">
                <TiSocialFacebookCircular className="fb" />
              </Link>
              <Link to="#">
                <TiSocialLinkedinCircular className="lk" />
              </Link>
              <Link to="#">
                <TiSocialTwitterCircular className="twitter" />
              </Link>
            </div>
          </div>
        </div>

        <div className="team__card-id">
          <img width="200px" height="200px" src={Elodie} alt={Elodie} />
          <div className="card__content">
            <h3>Elodie</h3>
            <h5>Scrum Master</h5>
            <p>Développeur Front</p>
            <div className="id-social">
              <Link to="#">
                <TiSocialFacebookCircular className="fb" />
              </Link>
              <Link to="#">
                <TiSocialLinkedinCircular className="lk" />
              </Link>
              <Link to="#">
                <TiSocialTwitterCircular className="twitter" />
              </Link>
            </div>
          </div>
        </div>

        <div className="team__card-id">
          <img width="200px" height="200px" src={Yann} alt={Yann} />
          <div className="card__content">
            <h3>Yann</h3>
            <h5>Référent Git/Github</h5>
            <p>Developpeur Back</p>
            <div className="id-social">
              <Link to="#">
                <TiSocialFacebookCircular className="fb" />
              </Link>
              <Link to="#">
                <TiSocialLinkedinCircular className="lk" />
              </Link>
              <Link to="#">
                <TiSocialTwitterCircular className="twitter" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <span className="team__span">Crédits photos : Ruroc</span>
    </div>
  );
};

export default React.memo(Team);
