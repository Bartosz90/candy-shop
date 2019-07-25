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
        <div className="donut" style={{ backgroundImage: `url(${donut})` }} />
      </section>
    );
  }
}

export default Home;
