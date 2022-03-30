import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../ProfilUpdate/profilUpdate.scss";


const ProfilUpdate = ({ userId }) => {
  const [presentation, setPresentation] = useState("");

  console.log(userId);

  const navigate = useNavigate();

  const send = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:3000/profil/${userId}`,
        { presentation }
      );

      console.log(response.data);
      console.log(JSON.stringify(response.data));

      // clear
      setPresentation("");
      navigate(`/profil/${userId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h2>Modifier votre profil</h2>
      <form className="profilUpdate-form" onSubmit={send}>
        <label htmlFor="presentation">Présentation</label>
        <input
          id="presentation"
          type="text"
          placeholder={presentation}
          value={presentation}
          onChange={(e) => setPresentation(e.target.value)}
        />

        <button className="form__btn-submit">Valider votre profil</button>
      </form>
    </div>
  );
};

export default React.memo(ProfilUpdate);
