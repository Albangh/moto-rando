// import react
import React from "react";
import { Link } from "react-router-dom";

// import style
import "../Footer/footer.scss";

//import pages
import SocialLink from "./SocialLink/SocialLink";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/mentions-legales">Mentions légales et CGU</Link>
      <SocialLink />
    </div>
  );
};

export default React.memo(Footer);
