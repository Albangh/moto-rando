import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registrationUser.scss";
import apiAxios from "../../../request";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/profil/inscription";

const RegistrationUser = () => {
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

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
        navigate('/connexion')
      ) : (
        <>
          <div className="signup">
            <h2 className="signup-title">Inscription</h2>
            <form className="signup-form" onSubmit={handleSubmit} >
              <h3 className="subtitle">Veuillez remplir le formulaire ci-dessous</h3>
              <Button ref={errRef} color="error">
                {errMsg}
              </Button>
              <TextField
                className="signup-input"
                id="username"
                type='text'
                color="warning"
                label="Pseudo"
                variant="outlined"
                ref={userRef}
                onChange={(e) => setAlias(e.target.value)}
                value={alias}
              />
              <TextField
                className="signup-input"
                id="email"
                type='email'
                color="warning"
                required
                label="Email"
                variant="outlined"
                ref={userRef}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                className="signup-input"
                id="password"
                type='password'
                color="warning"
                required
                label="Mot de passe"
                variant="outlined"
                ref={userRef}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <TextField
                className="signup-input"
                id="confirm_pwd"
                type='password'
                color="warning"
                required
                label="Confirmez mot de passe"
                variant="outlined"
                ref={userRef}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <button className="btn-signup" variant="outlined">3..2..1.. go</button>
              <h3 className="subtitle">J'ai déjà un compte ?</h3>
              <Link to='/connexion'>
                <Button className="btn-link" variant="outlined">Se connecter</Button>
              </Link>
            </form>
          </div>

        </>
      )}
    </>
  );
};

export default React.memo(RegistrationUser);
