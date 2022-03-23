// import react
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import requetes
import { getAllList } from "../../request/itineraryRequest";

// import composants
import HomeItinerary from "../../Components/HomeItinerary/HomeItinerary";
import ButtonSearchHome from "../../Components/ButtonSearchHome/ButtonSearchHome";
// import style
import "../Home/home.scss";



const Home = () => {

  const [itinerary, setItinerary] = useState([]);

  const isLogged = useSelector((state) => state.user.logged);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllList();
      setItinerary(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <ButtonSearchHome />

      <HomeItinerary itineraryList={itinerary} userId={userId} isLogged={isLogged} />
    </>
  );
};

export default React.memo(Home);
