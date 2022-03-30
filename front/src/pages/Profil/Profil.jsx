import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

//composants
import User from "../../components/Profil/User";
import Bike from "../../components/Profil/Bike/Bike";

//styles

import "./profil.scss";
import apiAxios from "../../request";
import { Button } from "@mui/material";

//Page du profil
const Profil = () => {
  const [profilID, setProfilID] = useState([]);
  const [motorbikeID, setMotorbikeID] = useState([]);
  const [deleteID, setDeleteID] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    // requete pour afficher les infos du profil par l'id
    apiAxios.get(`/profil/${params.id}`).then(({ data }) => {
      setProfilID(data);
      setMotorbikeID(data);
      setIsLoading(false);
    });
  }, [params.id]);
  console.log(profilID);

  const deleteUser = (id, e) => {
    apiAxios.delete(`/profil/${id}`)
      .then(res => console.log('Supprimer', res)).catch(err => console.log(err))
  }

  return (
    <>
      <h2 className="signup-title">Profil</h2>
      <div className="profil">
        {!isLoading && profilID && (
          <>
            <div className="profil__detail">
              <User
                id={profilID.user_id}
                alias={profilID.user_alias}
                email={profilID.user_email}
                presentation={profilID.user_presentation}
              />
            </div>
            <h5 className="title-description">Dernières balades partagées</h5>
            <Link
              to={`/profil/${profilID.user_id}/nouveau-itineraire`}
              className="profil-create"
            >
              <Button variant="contained" color="success">
                Créer une nouvelle balade
              </Button>
            </Link>

            <Button onClick={(e) => deleteUser(profilID.user_id, e)} className="delete-profil" variant="outlined" color="error">
              Supprimer mon profil
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default React.memo(Profil);
