import React from "react";
import "../styles/nav.sass";

const Nav = ({ active, click }) => {
  return (
    <>
      <button
        className={active ? "nav-burger active" : "nav-burger"}
        onClick={click}
      >
        <span className="span-1" />
        <span className="span-2" />
        <span className="span-3" />
      </button>
      <nav className={active ? "nav active" : "nav"} />
    </>
  );
};

export default Nav;
