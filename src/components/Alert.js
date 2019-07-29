import React from "react";
import "../styles/alert.sass";

const Alert = ({ alertText, handleAlert }) => {
  return (
    <section className="alert">
      <p>{alertText}</p>
      <button onClick={handleAlert}>OK</button>
    </section>
  );
};

export default Alert;
