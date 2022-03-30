import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Profil from "../pages/Profil/Profil";

const ProfilContainer = () => {
  const logged = useSelector((state) => state.user.logged);

  if (!logged) {
    return <Navigate to="/" replace />;
  }

  return <Profil />;
};

export default React.memo(ProfilContainer);
