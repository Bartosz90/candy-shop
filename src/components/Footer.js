import React from "react";
import "../styles/footer.sass";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        <a
          href="https://github.com/Bartosz90"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square" />
        </a>
        <a
          href="https://www.facebook.com/bartek.krupa.503"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square" />
        </a>

        <a
          href="https://www.linkedin.com/in/bartosz-krupa-95b715159/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
      <h1>
        2019{" "}
        <a
          href="https://bartosz90.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          B. Krupa
        </a>
      </h1>
    </footer>
  );
};

export default Footer;
