import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
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
    ]
  };
  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({ welcomePageCounter: this.state.welcomePageCounter + 1 });
      if (this.state.welcomePageCounter > 7) {
        clearInterval(timer);
      }
    }, 1000);
  }
  handleMenu = () => {
    this.setState({ isNavActive: !this.state.isNavActive });
  };
  render() {
    return (
      <BrowserRouter>
        <>
          {this.state.welcomePageCounter < 0.1 && <WelcomePage />}
          <Nav
            active={this.state.isNavActive}
            click={this.handleMenu}
            sections={this.state.sections}
          />
          <Main sections={this.state.sections} />
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
