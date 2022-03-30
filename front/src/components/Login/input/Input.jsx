import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const Input = ({ value, type, name, placeholder, onChange, label }) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <TextField
      // React - state
      onChange={handleChange}
      className="signup-input"
      color="warning"
      label={label}
      variant="outlined"
      value={value}
      // infos base
      id={inputId}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: "",
  type: "text",
};

export default React.memo(Input);
