import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const ButtonSearchHome = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h3 className="home__header-title">
          Trouvez dès maintenant votre prochaine balade moto
        </h3>
        <Link className="home__header-link" to="/itineraires">
          Rechercher
        </Link>
      </div>
    </div>
  );
};

export default React.memo(ButtonSearchHome);
