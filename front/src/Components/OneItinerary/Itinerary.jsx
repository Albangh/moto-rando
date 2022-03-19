import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import MyMap from "../MapOneItinerary/MyMap";
import { AiOutlineArrowLeft } from "react-icons/ai";

import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon, WhatsappIcon, TwitterIcon } from "react-share";
import { Carousel } from "react-responsive-carousel";
import "./itinerary.scss";
import "./carousel.scss";

import avatar from "../../assets/images/racer.png";

const OneItinerary = ({
  id,
  title,
  description,
  highway,
  curve,
  kilometer,
  hour,
  minute,
  user,
  longitude,
  zoom,
  latitude,
  pictures,
  trace,
}) => {
  console.log("trace", trace);
  return (
    <>
      <MyMap
        zoom={zoom}
        latitude={latitude}
        longitude={longitude}
        trace={trace}
      />
      <div className="itinerary">
        <div className="itinerary__left">
          <Link className="itinerary__left-link" to="/itineraires">
            <AiOutlineArrowLeft /> Toutes les balades moto
          </Link>

          <div className="detail">
            <h1 className="detail-title">{title}</h1>
            <div className="detail__itinerary">
              <div className="detail__itinerary-span tag-teal">
                <h5>Distance :</h5>
                <span>{kilometer} km</span>
              </div>

              <div className="detail__itinerary-span tag-purple">
                <h5>Durée :</h5>
                <span>
                  {hour} h {minute}
                </span>
              </div>

              <div className="detail__itinerary-span tag-pink">
                <h5>Autoroute :</h5>
                <span>{highway === true ? "Oui" : "Non"}</span>
              </div>

              <div className="detail__itinerary-span tag-green">
                <h5>Virages :</h5>
                <span className="curve">{curve} sur 5</span>
              </div>
              <h5 className="title-description">Description</h5>
              <p>{description}</p>
            </div>

            <div className="itinerary__user">
              <div className="itinerary__user-profil">
                <img
                  src={avatar}
                  alt="casque moto"
                  width="100px"
                  height="100px"
                />
                <h5>{user}</h5>
              </div>
              <div className="itinerary__user-share">
                <div className="icon">
                  <FacebookShareButton
                    url={`http://localhost:3001/itineraire/${id}`}
                    className="Demo__some-network__share-button"
                    title={title}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <WhatsappShareButton
                    url={`http://localhost:3001/itineraire/${id}`}
                    className="Demo__some-network__share-button"
                    title={title}
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <TwitterShareButton
                    url={`http://localhost:3001/itineraire/${id}`}
                    className="Demo__some-network__share-button"
                    title={title}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
                <p>Partager cette balade</p>
              </div>
            </div>
          </div>
        </div>
        <div className="itinerary__right">
          <h5 className="title-description">Photos</h5>
          <Carousel showArrows={true}>
            {pictures.map((picture) => (
              <img src={picture.pic_link} alt={picture.pic_title}></img>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

OneItinerary.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default React.memo(OneItinerary);
