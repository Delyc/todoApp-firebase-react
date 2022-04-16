import React from "react";

const SubmitButton = ({isValid, handleClick, label}) => {
  return (
    <button
      disabled={!isValid}
      onClick={handleClick}
      className="submit-button"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
