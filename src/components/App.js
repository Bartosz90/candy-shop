import React, { Component } from "react";
import "../styles/App.sass";
import WelcomePage from "./WelcomePage";

class App extends Component {
  state = {
    welcomePageCounter: 0
  };
  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({ welcomePageCounter: this.state.welcomePageCounter + 1 });
      if (this.state.welcomePageCounter > 7) {
        clearInterval(timer);
      }
    }, 1000);
  }
  render() {
    return this.state.welcomePageCounter < 7 && <WelcomePage />;
  }
}

export default App;
