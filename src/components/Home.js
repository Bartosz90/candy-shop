import React, { Component } from "react";
import "../styles/home.sass";
import donut from "../images/donut.png";
import HeaderHome from "./HeaderHome";

class Home extends Component {
  state = {
    activeSentenceIndex: 0,
    textOpacity: "1",
    topLipAnimation: "speak-up .1s linear 10",
    botLipAnimation: "speak-down .1s linear 10"
  };
  // images = [img1, img2, img3, img4, img5];
  //   componentDidMount() {
  //     setInterval(() => {
  //       if (this.state.activeIndex === this.images.length - 1) {
  //         this.setState({
  //           activeIndex: 0
  //         });
  //       } else {
  //         this.setState({
  //           activeIndex: this.state.activeIndex + 1
  //         });
  //       }
  //     }, 4000);
  //   }
  donutSentences = [
    "Hi, check out the menu above.",
    "Hey you! Wanna buy a donut?",
    "How'r you doin?",
    "What's up, fella?",
    "How's ur day, friend?",
    "I'm hungry... need a sweet!",
    "Has anyone seen some candies?!",
    "I need some sugar. "
  ];

  componentDidMount() {
    if (this.props.animationDone) {
      this.setState({
        activeSentenceIndex:
          Math.floor(Math.random() * (this.donutSentences.length - 1 - 1 + 1)) +
          1
      });
    }
    this.timer = setTimeout(
      () => {
        this.timer2 = setInterval(() => {
          this.setState({
            textOpacity: "0",
            topLipAnimation: "none",
            botLipAnimation: "none"
          });
          this.timer3 = setTimeout(() => {
            this.setState({
              textOpacity: "1",
              topLipAnimation: "speak-up .1s linear 10",
              botLipAnimation: "speak-down .1s linear 10",
              activeSentenceIndex:
                Math.floor(
                  Math.random() * (this.donutSentences.length - 1 - 1 + 1)
                ) + 1
            });
          }, 1000);
        }, 6000);
      },
      this.props.animationDone ? 100 : 7000
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
    clearInterval(this.timer2);
    clearTimeout(this.timer3);
  }

  render() {
    return (
      <section className="home main-section">
        {/* <img src={this.images[this.state.activeIndex]} alt="sweets" /> */}
        <HeaderHome animationDone={this.props.animationDone} />
        <div
          className="donut"
          style={{
            backgroundImage: `url(${donut})`,
            right: `${this.props.animationDone ? "48%" : "-100px"}`,
            animation: `${
              this.props.animationDone
                ? "none"
                : "walk 3s linear 5.5s forwards, step .1s linear 5.5s 30"
            }`
          }}
        >
          <div
            className="top-lip"
            style={{
              animation: this.state.topLipAnimation,
              animationDelay: `${this.props.animationDone ? "1s" : "8.8s"}`
            }}
          />
          <div
            className="bot-lip"
            style={{
              animation: this.state.botLipAnimation,
              animationDelay: `${this.props.animationDone ? "1s" : "8.8s"}`
            }}
          />
          <div
            className="text-1"
            style={{
              animationDelay: `${this.props.animationDone ? "1s" : "8.8s"}`,
              opacity: `${this.state.textOpacity}`
            }}
          />
          <div
            className="text-2"
            style={{
              animationDelay: `${this.props.animationDone ? "1.2s" : "9s"}`,
              opacity: `${this.state.textOpacity}`
            }}
          >
            {this.donutSentences[this.state.activeSentenceIndex]}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
