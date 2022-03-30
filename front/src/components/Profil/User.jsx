/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import userAvatar from '../../assets/images/avatar.png'
import "../Profil/user.scss";
import { Button } from "@mui/material";


const User = ({ id, alias, email, presentation }) => {
  return (
    <div className="user">
      <div className="user__detail">
        <img className="user__picture" src={userAvatar} alt="photo de profil" />
        <h5 className="title-description-user">Pseudo</h5>
        <h2>{alias}</h2>
        <h5 className="title-description-user">mail</h5>
        <span>{email}</span>
        {presentation ?
          <>
            <h5 className="title-description-user">Ma description</h5>
            <p>{presentation}</p>
          </>
          : ""}
      </div>

      <Link to={`/profil/${id}/modifier`}>
          <Button className="btn-link" variant="outlined">Ajouter une description</Button>
      </Link>
      <Link to={`/profil/${id}/modifier`}>
          <Button className="btn-bike" color="secondary" variant="contained">Ajouter une moto</Button>
      </Link>
    </div>
  );
};

User.propTypes = {
  alias: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  presentation: PropTypes.string,
};

User.defaultProps = {
  presentation: "",
};

export default React.memo(User);
