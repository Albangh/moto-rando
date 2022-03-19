import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./registrationUser.scss";
import apiAxios from "../../../request";
// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/profil/inscription";

const RegistrationUser = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await apiAxios.post(REGISTER_URL, {
        alias,
        password,
        confirmPassword,
        email,
      });
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear
      setAlias("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      if (err.response) {
        setErrMsg("Cet utilisateur existe déjà");
      } else if (err.response.status === 401) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <>
          <h2 className="success">Inscription reussie</h2>
          <Link to="/connexion" className="btn btn-3">
            Se connecter
          </Link>
        </>
      ) : (
        <>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className="card-login">
            <div className="card-image">
              <h2 className="card-heading">
                INSCRIVEZ-VOUS
                <small>Vos informations</small>
              </h2>
            </div>
            <form className="card-form" onSubmit={handleSubmit}>
              <div className="input">
                <input
                  className="input-field"
                  type="text"
                  id="username"
                  ref={userRef}
                  onChange={(e) => setAlias(e.target.value)}
                  value={alias}
                  required
                />
                <label className="input-label">Pseudo</label>
              </div>
              <div className="input">
                <input
                  className="input-field"
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <label className="input-label">Email</label>
              </div>
              <div className="input">
                <input
                  className="input-field"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <label className="input-label">Mot de passe</label>
              </div>
              <div className="input">
                <input
                  className="input-field"
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  required
                />
                <label className="input-label">
                  Confirmer votre mot de passe
                </label>
              </div>
              <div className="action">
                <button className="action-button">S'inscrire</button>
              </div>
            </form>
            <div className="card-info">
              <p>
                Déjà un compte ? <Link to="/connexion">connectez-vous</Link>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default React.memo(RegistrationUser);
