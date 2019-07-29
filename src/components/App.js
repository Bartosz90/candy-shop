import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.sass";
import WelcomePage from "./WelcomePage";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

class App extends Component {
  state = {
    welcomePageCounter: 0,
    isNavActive: false,
    sections: [
      { name: "home", id: 1, path: "/" },
      { name: "about", id: 2, path: "/about" },
      { name: "products", id: 3, path: "/products" },
      { name: "contact", id: 4, path: "/contact" }
    ],
    animationDone: false,
    basket: [],
    cartIconTrigger: false
  };

  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({ welcomePageCounter: this.state.welcomePageCounter + 1 });
      if (this.state.welcomePageCounter > 7) {
        clearInterval(timer);
      }
    }, 1000);

    setTimeout(() => {
      this.setState({ animationDone: true });
    }, 10000);
  }

  handleMenu = () => {
    this.setState({ isNavActive: !this.state.isNavActive });
  };
  updatebasket = (id, name, quantity) => {
    const currentBasket = [...this.state.basket];
    const alreadyInBasket = currentBasket.filter(product => {
      return product.id === id;
    });
    if (alreadyInBasket.length !== 0) {
      return alert("This product is already in basket!");
    } else {
      const basket = this.state.basket.concat({
        id: id,
        name: name,
        quantity: quantity
      });
      this.setState({ basket, cartIconTrigger: true });
      setTimeout(() => {
        this.setState({ cartIconTrigger: false });
      }, 1000);
    }
  };
  handleProductRemove = e => {
    const basket = [...this.state.basket];
    const index = basket.findIndex(product => {
      return product.id.toString() === e.target.parentNode.attributes.id.value;
    });
    basket.splice(index, 1);
    this.setState({ basket });
  };

  render() {
    return (
      <Router>
        <>
          {this.state.welcomePageCounter < 1 && <WelcomePage />}
          <Nav
            active={this.state.isNavActive}
            click={this.handleMenu}
            sections={this.state.sections}
          />
          <Main
            sections={this.state.sections}
            animationDone={this.state.animationDone}
            basket={this.state.basket}
            click={this.updatebasket}
            handleProductRemove={this.handleProductRemove}
            cartIconTrigger={this.state.cartIconTrigger}
          />
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
