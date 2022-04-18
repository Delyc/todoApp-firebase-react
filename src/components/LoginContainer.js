import React, { useState, useEffect } from "react";
import Textfield from "./Textfield";
import SubmitButton from "./SubmitButton";
import { useAppContext } from "../contexts/AppContext";

const LoginContainer = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const { setIsLoggedIn, signInWithGoogle } = useAppContext();

  const setFormValidation = () => {
    if (emailIsValid && passwordIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  useEffect(setFormValidation, [emailIsValid, passwordIsValid]);

  const handleSubmit = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "yes");
  };

  return (
    <div className="login-box">
      <div className="login-title">Log In</div>
      <Textfield
        label="Email"
        placeHolder="Enter your Email"
        type="email"
        value={email}
        setValue={setEmail}
        valid={emailIsValid}
        setValid={setEmailIsValid}
      />
      <Textfield
        label="Password"
        placeHolder="Enter your Password"
        type="password"
        value={password}
        setValue={setPassword}
        valid={passwordIsValid}
        setValid={setPasswordIsValid}
      />
      <SubmitButton handleClick={handleSubmit} isValid={formIsValid} label={"Log In"} />
      <SubmitButton handleClick={signInWithGoogle} isValid={true} label={"Log In With Google"} />
    </div>
  );
};
//It's not letting me chat for some reason... hold on
export default LoginContainer;
