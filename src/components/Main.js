import React from "react";
import "../styles/main.sass";
import { Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Products from "./Products.js";

const About = () => {
  return (
    <section className="about main-section">
      <h1>About</h1>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="aontact main-section">
      <h1>Contact</h1>
    </section>
  );
};
const Main = ({ animationDone }) => {
  return (
    <main className="main">
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Home animationDone={animationDone} />}
        />
        <Route path="/about" exact component={About} />
        <Route path="/products" exact component={Products} />
        <Route path="/contact" exact component={Contact} />
        <Route exact component={Home} />
      </Switch>
    </main>
  );
};

export default Main;
