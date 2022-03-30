// import react
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

// import style
import "../SocialLink/socialLink.scss";
import { Link } from "@mui/material";

const SocialLink = () => {
  return (
    <div className="link">
      <Link to="https://facebook.com">
        <FaFacebookF className="fb" />
      </Link>
      <Link to="https://instagram.com">
        <FaInstagram className="insta" />
      </Link>
    </div>
  );
};

export default React.memo(SocialLink);
