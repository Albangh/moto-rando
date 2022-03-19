// import react
import React, { useEffect, useState } from "react";
import { getAllList } from "../../request/itineraryRequest";
import InputFilterItinerary from "../../Components/InputFilterItinerary/InputFilterItinerary";
import MapBox from "../../Components/MapPageFilterItinerary/MapBox";
//style
import "./profilItinary.scss";

const Itinerary = () => {
  const [itinerary, setItinerary] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllList().then(({ data }) => {
      setItinerary(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="itinerary_list">
      <div className="itinerary_list-left">
        <InputFilterItinerary data={itinerary} itemsPerPage={4} />
      </div>
      <div className="itinerary_list-right">
        <h2 className="itinerary__title">RECHERCHER SUR LA CARTE</h2>
        {!isLoading && itinerary && <MapBox mapData={itinerary} />}
      </div>
    </div>
  );
};

export default React.memo(Itinerary);
