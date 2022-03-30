import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import RegistrationItinerary from "../components/Registration/Itinerary/RegistrationItinerary";

const RegistrationItineraryContainer = () => {
  const logged = useSelector((state) => state.user.logged);
  const userId = useSelector((state) => state.user.id);

  if (!logged) {
    return <Navigate to="/" replace />;
  }

  return <RegistrationItinerary userId={userId} />;
};

export default React.memo(RegistrationItineraryContainer);
