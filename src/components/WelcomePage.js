import React from "react";
import "../styles/welcome-page.sass";
import bee from "../images/bee.png";

const WelcomePage = () => {
  return (
    <>
      <div className="welcome welcome-1" />
      <div className="welcome welcome-2" />
      <div className="welcome welcome-3" />
      <div className="welcome welcome-4" />
      <div className="msg">
        <img src={bee} alt="" className="bee" />
      </div>
      <div className="author">
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
        >
          CC 3.0 BY
        </a>
      </div>
    </>
  );
};

export default WelcomePage;
