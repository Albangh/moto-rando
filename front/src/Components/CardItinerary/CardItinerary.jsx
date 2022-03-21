import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MapCardItinerary from "../MapCardItinerary/MapCardItinerary";
//style
import { RiPinDistanceFill, RiMapPinTimeFill } from "react-icons/ri";
import { GiRoad, GiMountainRoad } from "react-icons/gi";
import "./style.scss";
import userAvatar from '../../assets/images/avatar.png'

const Itinerary = ({
  id,
  title,
  user,
  kilometer,
  highway,
  hours,
  minutes,
  zoom,
  latitude,
  longitude,
  trace,
  curve
}) => {
  return (
    <div className="card">
      <div className="container">
        <div className="container__map">
          <MapCardItinerary
            className="container__img"
            zoom={zoom}
            latitude={latitude}
            longitude={longitude}
            trace={trace}
          />
        </div>

        <div className="container__info">
          <div className="info">
            <RiPinDistanceFill className="blue"/>
            <span> {kilometer}km</span>
          </div>
          <div className="info">
          <RiMapPinTimeFill className="red"/>
            <span> {hours}h{minutes}m</span>
          </div>
          <div className="info">
          <GiRoad className="orange"/>
            <span> {highway === true ? "Oui" : "Non"}</span>
          </div>
          <div className="info">
          <GiMountainRoad className="green"/>
          <span className="curve">{curve}/5</span>
          </div>
        </div>
        <div className="container__profile">
          <img
            src={userAvatar}
            alt="people"
          />

          <div className="container__profile__text">
            <Link to={`/itineraire/${id}`}>
              <h2>{title}</h2>
            </Link>
            <p>Par <b>{user}</b></p>
          </div>
        </div>
      </div>
    </div>

  );
};

Itinerary.prototype = {
  title: PropTypes.string.isRequired,
  map: PropTypes.string,
};

Itinerary.defaultProps = {
  map: "https://fakeimg.pl/300",
};

export default React.memo(Itinerary);
