import React, { useState, useEffect } from "react";
import {validateEmail, validatePassword, validateRequired} from "../libraries/functions"

const Textfield = ({
  setValue,
  setValid,
  valid,
  label,
  type,
  placeholder,
  field,
  value,
}) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const resetFocus = () => {
    setFocus(false);
  };

  useEffect(resetFocus, []);

  const handleChange = (e) => {
    setValue(e.target.value, field);
    if (e.target.type === "email") {
      const checkValid = validateEmail(e.target.value);
      setValid(checkValid);
    }
    if (e.target.type === "password") {
      const checkValid = validatePassword(e.target.value);
      setValid(checkValid);
    }
    if (e.target.type === "text") {
      const checkValid = validateRequired(e.target.value);
      setValid(checkValid, field);
    }
    if (e.target.type === "date") {
      const checkValid = validateRequired(e.target.value);
      setValid(checkValid, field);
    }
  };

  return (
    <div>
      <div className="input-label">{label}</div>
      <input
        className={`input-field ${valid || !focus ? "" : "error"}`}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default Textfield;
