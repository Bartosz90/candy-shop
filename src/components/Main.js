import React from "react";
import "../styles/main.sass";
import { BrowserRouter, Route } from "react-router-dom";

const Home = () => {
  return (
    <section className="home main-section">
      <h1>Home</h1>
    </section>
  );
};
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
const Main = props => {
  return (
    <main className="main">
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/products" exact component={Products} />
      <Route path="/contact" exact component={Contact} />
    </main>
  );
};

export default Main;
