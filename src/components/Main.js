import React from "react";
import "../styles/main.sass";
import { Route, Switch } from "react-router-dom";
import Home from "./Home.js";

const About = () => {
  return (
    <section className="about main-section">
      <h1>About</h1>
    </section>
  );
};
const Products = () => {
  return (
    <section className="aroducts main-section">
      <h1>Products</h1>
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
      {/* <h1>{props.animationDone.toString()}</h1> */}
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
