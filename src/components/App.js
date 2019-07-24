import React, { Component } from "react";
import "../styles/App.sass";
import WelcomePage from "./WelcomePage";
import Nav from "./Nav.js";
import Footer from "./Footer.js";

class App extends Component {
  state = {
    welcomePageCounter: 0,
    isNavActive: false
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
      <>
        {this.state.welcomePageCounter < 7 && <WelcomePage />}
        <Nav active={this.state.isNavActive} click={this.handleMenu} />
        <Footer />
      </>
    );
  }
}

export default App;
