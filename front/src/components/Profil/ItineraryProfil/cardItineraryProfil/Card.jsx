import React from "react";
import PropTypes from "prop-types";
//style
import "./card.scss";

const CardProfil = ({ title, pictures }) => {
  // c'est les balades créées par l'utlisateur
  return (
    <div className="card-profil">
      <div className="card-header-profil">
        <img className="card__img=profil" src={pictures} alt={title} />
      </div>
      <div className="card-body-profil">
        <h4>
          <div className="card__title-profil">{title}</div>
        </h4>
      </div>
    </div>
  );
};

CardProfil.prototype = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.string,
};

CardProfil.defaultProps = {
  pictures: "https://fakeimg.pl/300",
};

export default React.memo(CardProfil);
