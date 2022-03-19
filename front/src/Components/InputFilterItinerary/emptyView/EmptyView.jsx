import React from "react";

import gif from "../../../assets/images/gif.gif";
import "./emptyView.scss";


const EmptyView = () => (
  <div className="emptyView-wrap">
    <img src={gif} alt="" />
  </div>
);

export default EmptyView;
