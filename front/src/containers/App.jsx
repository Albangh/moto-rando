import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import App from "../components/App/App";
import { actionAppMount } from "../actions/system";

const AppContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionAppMount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <App />;
};

export default React.memo(AppContainer);
