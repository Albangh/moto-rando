import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import Input from "./input/Input";

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  loggedMsgError,
}) => {
  const [status, setStatus] = useState(false);

  const label = ['Email', 'Mot de passe']

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
    setStatus(true);
  };

  return (
    <>
      <div className="signup">
        <h2 className="signup-title">Connexion</h2>
        <form className="signup-form" onSubmit={handleSubmit} >
          <h3 className="subtitle">Veuillez remplir le formulaire ci-dessous</h3>
          {status && <Button color="error">{loggedMsgError}</Button>}
          <Input
            label={label[0]}
            variant="outlined"
            name="email"
            value={email}
            onChange={changeField}
            required
          />
          <Input
            label={label[1]}
            type="password"
            name="password"
            value={password}
            onChange={changeField}
            required
          />
          <button className="btn-signup" variant="outlined">3..2..1.. go</button>
          <h3 className="subtitle">Pas encore de compte ?</h3>
          <Link to='/inscription'>
            <Button className="btn-link" variant="outlined">S'inscrire</Button>
          </Link>
        </form>
      </div>
    </>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
Login.defaultProps = {
  // isLogged: false
};
export default React.memo(Login);
