import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import MyMap from "../MapOneItinerary/MyMap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiPinDistanceFill, RiMapPinTimeFill } from "react-icons/ri";
import { GiRoad, GiMountainRoad } from "react-icons/gi";

import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon, WhatsappIcon, TwitterIcon } from "react-share";
import { Carousel } from "react-responsive-carousel";
import "./itinerary.scss";
import "./carousel.scss";

import userAvatar from '../../assets/images/avatar.png'
import { Button } from "@mui/material";

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
      <div className="header-itinerary">
        <h1 className="detail-title">{title}</h1>
      </div>

      <div className="itinerary">
        <div className="detail__itinerary">
          <div className="detail__itinerary-span tag-teal">
            <h5><RiPinDistanceFill className="blue"/></h5>
            <span>{kilometer}km</span>
          </div>

          <div className="detail__itinerary-span tag-purple">
            <h5><RiMapPinTimeFill className="red"/></h5>
            <span>
              {hour}h{minute}
            </span>
          </div>

          <div className="detail__itinerary-span tag-pink">
            <h5><GiRoad className="orange"/></h5>
            <span>{highway === true ? "Oui" : "Non"}</span>
          </div>

          <div className="detail__itinerary-span tag-green">
            <h5><GiMountainRoad className="green"/></h5>
            <span className="curve">{curve}/5</span>
          </div>
        </div>

        <h5 className="title-description">Description</h5>
        <p className="content-description">{description}</p>


        <h5 className="title-description">Photos</h5>
        <div className="carousel">
          <Carousel
            showArrows={false}
            dynamicHeight={true}
            thumbWidth={60}
          >
            {pictures.map((picture) => (
              <img className="img-carousel" src={picture.pic_link} alt={picture.pic_title}></img>
            ))}
          </Carousel>
        </div>


        <div className="itinerary__user">
          <div className="itinerary__user-profil">
            <img
              src={userAvatar}
              alt="user"
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

        <Link className="itinerary__left-link" to="/itineraires">
          <Button className="btn-link" variant="outlined"><AiOutlineArrowLeft /> Toutes les balades moto</Button>
        </Link>
      </div>
    </>
  );
};

OneItinerary.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default React.memo(OneItinerary);
