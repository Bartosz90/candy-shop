import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.sass";

const Nav = ({ active, click, sections }) => {
  const links = sections.map(section => {
    return (
      <NavLink
        to={section.path}
        exact
        key={section.id}
        activeStyle={{ borderBottom: "4px solid #fff" }}
        onClick={click}
      >
        <button onClick={click} className={`menu-btn btn-${section.id}`}>
          {section.name}
        </button>
      </NavLink>
    );
  });
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
      <nav className={active ? "nav active" : "nav"}>{links}</nav>
    </>
  );
};

export default Nav;
