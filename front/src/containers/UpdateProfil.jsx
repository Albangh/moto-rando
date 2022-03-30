import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ProfilUpdate from "../components/ProfilUpdate/ProfilUpdate";

const RegistrationItineraryContainer = () => {
  const logged = useSelector((state) => state.user.logged);
  const userId = useSelector((state) => state.user.id);
  const pseudo = useSelector((state) => state.user.pseudo);

  if (!logged) {
    return <Navigate to="/" replace />;
  }

  return <ProfilUpdate userId={userId} pseudo={pseudo} />;
};

export default React.memo(RegistrationItineraryContainer);
