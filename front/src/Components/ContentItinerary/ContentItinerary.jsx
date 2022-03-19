import React from "react";
import PropTypes from "prop-types";

import Itinerary from "../Itinerary/Itinerary";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./contentItinerary.scss";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1300: { items: 4 },
  1400: { items: 5 },
};

const ContentItinerary = ({ itineraryList }) => {
  return (
    <>
      <h2 className="title">Des balades motos à couper le souffle</h2>
      <div className="container__card">
        <AliceCarousel
          disableDotsControls
          mouseTracking
          responsive={responsive}
          controlsStrategy="alternate"
        >
          {
            //ici on va boucler pour récupérer une liste d'itinéraire
            itineraryList
            // le slice + reverse est pour dire qu'a chaque nouvel itinéraire il vient se placer en premier
              .slice(0).reverse()
              .map((itinerary) => (
                //On rappelle un composant Itinerary, c'est les infos que l'on a besoin pour afficher un itinéraire,
                <Itinerary
                  key={itinerary.itinerary_id}
                  map={itinerary.pictures[0].pic_link}
                  title={itinerary.itinerary_title}
                  description={itinerary.itinerary_description}
                  id={itinerary.itinerary_id}
                  user={itinerary.user_alias}
                  kilometer={itinerary.itinerary_kilometer}
                  highway={itinerary.is_highway}
                  district={itinerary.districts[0].district_name}
                  hours={itinerary.itinerary_hour}
                  minutes={itinerary.itineray_minute}
                />
              ))
          }
        </AliceCarousel>
      </div>

      <h3 className="title-hr">Une communauté qui aime le partage</h3>

      <h2 className="title-home">Balades moto en Provence-Alpes-Côte d'Azur</h2>

      <div className="container__card">
        <AliceCarousel
          disableDotsControls
          mouseTracking
          responsive={responsive}
          controlsStrategy="alternate"
        >
          {
            //ici on va boucler pour récupérer une liste d'itinéraire
            itineraryList
              .filter(
                (district) =>
                  district.districts[0].district_name ===
                    "Provence-Alpes-CÃ´te dAzur" ||
                  district.districts[0].district_name ===
                    "Provence-Alpes-Côte dAzur"
              )
              .map((itinerary) => (
                //c'est les infos que l'on a besoin pour afficher un itinéraire
                <Itinerary
                  className="item"
                  data-value={itinerary.itinerary_id}
                  key={itinerary.itinerary_id}
                  map={itinerary.pictures[0].pic_link}
                  title={itinerary.itinerary_title}
                  description={itinerary.itinerary_description}
                  id={itinerary.itinerary_id}
                  user={itinerary.user_alias}
                  kilometer={itinerary.itinerary_kilometer}
                  highway={itinerary.is_highway}
                  hours={itinerary.itinerary_hour}
                  minutes={itinerary.itineray_minute}
                  pictures={itinerary.pictures}
                />
              ))
          }
        </AliceCarousel>
      </div>
    </>
  );
};

ContentItinerary.propTypes = {
  ItineraryList: PropTypes.arrayOf(
    PropTypes.shape({
      itinerary_id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      itinerary_title: PropTypes.string.isRequired,
      itinerary_description: PropTypes.string.isRequired,
    })
  ),
};

export default React.memo(ContentItinerary);
