import React from "react";
import candyFrame from "../images/candy-frame-min.png";
import "../styles/about.sass";
const About = () => {
  return (
    <section className="about main-section">
      <img src={candyFrame} alt="candy frame" />
      <section className="text">
        <h1>Welcome in the Candy Shop!</h1>
        <h2>We offer selection of finest sweets in the universe!</h2>
      </section>
      <div className="hamburger-bgc" />
    </section>
  );
};

export default About;
