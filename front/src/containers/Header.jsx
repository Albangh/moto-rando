import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Components/Header/Header";
import { actionSetLogout } from "../actions/user";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.logged);
  const userId = useSelector((state) => state.user.id);
  const pseudo = useSelector((state) => state.user.pseudo);

  const handleLogout = () => {
    dispatch(actionSetLogout());
  };

  return (
    <Header
      id={userId}
      isLogged={isLogged}
      pseudo={pseudo}
      handleLogout={handleLogout}
    />
  );
};

export default React.memo(HeaderContainer);
