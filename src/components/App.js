import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.sass";
import WelcomePage from "./WelcomePage";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Alert from "./Alert.js";

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
    cartIconTrigger: false,
    alertActive: false,
    alertText: ""
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
  updatebasket = (e, id, name, quantity) => {
    e.preventDefault();
    const currentBasket = [...this.state.basket];
    const alreadyInBasket = currentBasket.filter(product => {
      return product.id === id;
    });
    if (alreadyInBasket.length !== 0) {
      this.setState({
        alertActive: true,
        alertText: "This product is already in basket!"
      });
    } else if (quantity === 0) {
      this.setState({
        alertActive: true,
        alertText: "Add at least 1 product!"
      });
    } else if (quantity > 10) {
      this.setState({
        alertActive: true,
        alertText: "You can buy max 10 at once!"
      });
    } else {
      let newQuantity;
      if (quantity.length > 1 && quantity[0].toString() === "0") {
        newQuantity = quantity.slice(1, quantity.length);
        console.log(newQuantity);
      } else {
        newQuantity = quantity;
      }
      const basket = this.state.basket.concat({
        id: id,
        name: name,
        quantity: newQuantity
      });
      this.setState({ basket, cartIconTrigger: true });
      setTimeout(() => {
        this.setState({ cartIconTrigger: false });
      }, 300);
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
  handleAlert = () => {
    this.setState({ alertActive: false });
  };

  render() {
    return (
      <Router>
        <>
          {this.state.alertActive && (
            <Alert
              handleAlert={this.handleAlert}
              alertText={this.state.alertText}
            />
          )}
          {this.state.welcomePageCounter < 7 && <WelcomePage />}
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
