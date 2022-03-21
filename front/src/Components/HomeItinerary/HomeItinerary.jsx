import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import CardItinerary from "../CardItinerary/CardItinerary";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.scss";
import { BsPeople } from 'react-icons/bs'

import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import { Button } from "@mui/material";


const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1300: { items: 4 },
  1400: { items: 5 },
};

const HomeItinerary = ({ itineraryList, isLogged, userId }) => {
  return (
    <>
      <h2 className="title">Des balades motos à couper le souffle</h2>
      <div className="container__card">
        <AliceCarousel
          disableDotsControls
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
                  longitude={itinerary.districts[0].district_longitude}
                  latitude={itinerary.districts[0].district_latitude}
                  zoom={itinerary.districts[0].district_zoom}
                  trace={itinerary.itinerary_trace}
                  curve={itinerary.itinerary_curve}
                />
              ))
          }
        </AliceCarousel>
      </div>

      <div className="home-hr-content">

        <div className="home">
          <div className="home-content">
            <BsPeople className="icon" />

            <h2>Communauté</h2>

            <div className="home-content-block">
              <div className="left">
                <img src={img1} alt="photo paysage" />
              </div>

              <div className="right">
                <h3>DÉCOUVREZ DE NOUVELLES ROUTES</h3>

                <p>Où que vous soyez, trouvez de nouvelles balades moto à faire seul ou
                  à plusieurs. Celles-ci comportent des photos pour vous donner un
                  aperçu mais également des points d'intérêt.</p>

                <p>En quelques instants, depuis le site internet ou en important depuis
                  votre GPS, partagez votre balade moto. Vous en gardez la trace et en
                  faite profiter les membres.</p>

                <img className="home-content-img" src={img2} alt="photo paysage" />
              </div>
            </div>




            {isLogged ? (
              <Link
                to={`profil/${userId}/nouveau-itineraire`}
              >
                <Button className="btn-link" variant="outlined">créer votre itineraire</Button>
              </Link>
            ) : (
              <Link to="/inscription">
                <Button className="btn-link" variant="outlined">créer votre itineraire</Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <h2 className="title">Balades moto en Provence-Alpes-Côte d'Azur</h2>

      <div className="container__card">
        <AliceCarousel
          disableDotsControls
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
                  longitude={itinerary.districts[0].district_longitude}
                  latitude={itinerary.districts[0].district_latitude}
                  zoom={itinerary.districts[0].district_zoom}
                  trace={itinerary.itinerary_trace}
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
