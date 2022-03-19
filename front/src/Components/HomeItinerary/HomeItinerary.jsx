import React from "react";
import PropTypes from "prop-types";

import CardItinerary from "../CardItinerary/CardItinerary";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.scss";


const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1300: { items: 4 },
  1400: { items: 5 },
};

const HomeItinerary = ({ itineraryList }) => {
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
            itineraryList
              .slice(0).reverse()
              .map((itinerary) => (

                <CardItinerary
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
            itineraryList
              .filter(
                (district) =>
                  district.districts[0].district_name ===
                  "Provence-Alpes-CÃ´te dAzur" ||
                  district.districts[0].district_name ===
                  "Provence-Alpes-Côte dAzur"
              )
              .map((itinerary) => (
                <CardItinerary
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

HomeItinerary.propTypes = {
  ItineraryList: PropTypes.arrayOf(
    PropTypes.shape({
      itinerary_id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      itinerary_title: PropTypes.string.isRequired,
      itinerary_description: PropTypes.string.isRequired,
    })
  ),
};

export default React.memo(HomeItinerary);
