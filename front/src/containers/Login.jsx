import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Login from "../components/Login/Login";
import { actionSubmitLogin, actionUpdateLoginInput } from "../actions/user";

const LoginContainer = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.logged);
  const loggedMsgError = useSelector((state) => state.user.errLogged);

  const changeField = (value, name) => {
    dispatch(actionUpdateLoginInput(value, name));
  };

  const handleLogin = () => {
    dispatch(actionSubmitLogin());
  };

  if (isLogged) {
    return <Navigate to="/" replace />;
  }

  return (
    <Login
      email={email}
      password={password}
      isLogged={isLogged}
      changeField={changeField}
      handleLogin={handleLogin}
      loggedMsgError={loggedMsgError}
    />
  );
};

export default React.memo(LoginContainer);
