import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//style
import { BiUserCircle } from "react-icons/bi";

import "./style.scss";

const CardItinerary = ({
  id,
  map,
  title,
  description,
  user,
  kilometer,
  highway,
  hours,
  minutes,
  district,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <img className="card__img" src={map} alt={title} />
      </div>
      <div className="card-body">
        <h4>
          <Link to={`/itineraire/${id}`}>
            <div className="card__title">{title}</div>
          </Link>
        </h4>
        <div className="card-body-tag">
          {district && <span className="tag tag-green">{district}</span>}
          <span className="tag tag-teal">Distance: {kilometer} km</span>
          <span className="tag tag-purple">
            Durée: {hours} heures {minutes} min
          </span>
          <span className="tag tag-pink">
            Autoroute: {highway === true ? "Oui" : "Non"}
          </span>
        </div>
        <p>
          {description.length > 1 ? description.substring(0, 150) + "..." : ""}
        </p>
        <Link className="link-itinerary" to={`/itineraire/${id}`}>
          Voir l'itineraire
        </Link>
        <div className="user">
          <span className="card__user">
            <BiUserCircle className="icon" />
            {user}
          </span>
        </div>
      </div>
    </div>
  );
};

CardItinerary.prototype = {
  title: PropTypes.string.isRequired,
  map: PropTypes.string,
  description: PropTypes.string,
};

CardItinerary.defaultProps = {
  map: "https://fakeimg.pl/300",
  description: "",
};

export default React.memo(CardItinerary);
