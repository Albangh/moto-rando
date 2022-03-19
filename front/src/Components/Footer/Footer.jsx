// import react
import React from "react";
import { Link, NavLink } from "react-router-dom";


//import page
import SocialLink from "./SocialLink/SocialLink";

// import style
import "../Footer/footer.scss";
import logo from "../../assets/images/logo-white.png";



const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-link">
        <NavLink to="/">
          <img
            className="header__content__logo"
            width="80px"
            height="70px"
            src={logo}
            alt="logo du site"
          />
        </NavLink>
        <NavLink
          className='footer-link-nav'
          to="/itineraires"
        >
          Roadbooks
        </NavLink>
        <NavLink
         className='footer-link-nav'
          to="/equipe"
        >
          L'équipe
        </NavLink>
        <NavLink className='footer-link-nav' to="/mentions-legales">Mentions légales</NavLink>
        <NavLink className='footer-link-nav' to="/mentions-legales">CGU</NavLink>

        <SocialLink />
      </div>

    </div>
  );
};

export default React.memo(Footer);
