import React from "react";

import Card from "./cardItineraryProfil/Card";

import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1300: { items: 4 },
  1400: { items: 5 },
};

const ItineraryProfil = ({ itineraryProfil }) => {
  const card = itineraryProfil.itineraries;

  console.log("card", card);
  return (
    <div className="container__card">
      <AliceCarousel
        disableDotsControls
        mouseTracking
        responsive={responsive}
        controlsStrategy="alternate"
      >
        {card?.length > 0 ? (
          //ici on va boucler pour récupérer une liste d'itinéraire
          card
            ?.slice(0)
            .reverse()
            .map((item, index) => (
              // c'est les infos que l'on a besoin pour afficher un itinéraire
              <Card
                key={index}
                pictures={item.pics[0].pic_link}
                title={item.title}
              />
            ))
        ) : (
          <p className="card-empty">Aucune balade partagée</p>
        )}
      </AliceCarousel>
    </div>
  );
};

ItineraryProfil.propTypes = {};

export default ItineraryProfil;
