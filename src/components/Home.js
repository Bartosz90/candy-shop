import React, { Component } from "react";
import "../styles/home.sass";
import img1 from "../images/sweets1.jpg";
import img2 from "../images/sweets2.jpg";
import img3 from "../images/sweets3.jpg";
import img4 from "../images/sweets4.jpg";
import img5 from "../images/sweets5.jpg";
import donut from "../images/donut.png";

class Home extends Component {
  state = {
    activeIndex: 0
  };
  images = [img1, img2, img3, img4, img5];
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

  render() {
    return (
      <section className="home main-section">
        {/* <img src={this.images[this.state.activeIndex]} alt="sweets" /> */}
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
          {" "}
          <div
            className="text-1"
            style={{
              animationDelay: `${this.props.animationDone ? "1s" : "8.8s"}`
            }}
          />
          <div
            className="text-2"
            style={{
              animationDelay: `${this.props.animationDone ? "1.2s" : "9s"}`
            }}
          >
            Check out the menu above me!
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
