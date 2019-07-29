import React from "react";
import "../styles/about.sass";
import ChocIce from "../images/sweets/choc-ice.png";
import ChocBar from "../images/sweets/choc-bar.png";
import ChocCookies from "../images/sweets/choc-cookies.png";
import FruitCup from "../images/sweets/fruit-cup.png";
import FruitIce from "../images/sweets/fruit-ice.png";
import FruitLolli from "../images/sweets/fruit-lollipop.png";
import LemonCake from "../images/sweets/lemon-cake.png";
import LemonCup from "../images/sweets/lemon-cup.png";
import StrawDonut from "../images/sweets/straw-donut.png";
import StrawIce from "../images/sweets/straw-ice.png";
import StrawMuffin from "../images/sweets/straw-muffin.png";
import StrawSweet from "../images/sweets/straw-sweet.png";
import StrawWitchChoc from "../images/sweets/straw-with-choc.png";
import ToffeePan from "../images/sweets/toffee-pancakes.png";
import SugarDonut from "../images/sweets/sugar-donut.png";

const About = () => {
  const images = [
    { id: 1, img: ChocIce },
    { id: 2, img: ChocBar },
    { id: 3, img: ChocCookies },
    { id: 4, img: FruitCup },
    { id: 5, img: FruitIce },
    { id: 6, img: FruitLolli },
    { id: 7, img: LemonCake },
    { id: 8, img: LemonCup },
    { id: 9, img: StrawDonut },
    { id: 10, img: StrawIce },
    { id: 11, img: StrawMuffin },
    { id: 12, img: StrawSweet },
    { id: 13, img: StrawWitchChoc },
    { id: 14, img: ToffeePan },
    { id: 15, img: SugarDonut }
  ];

  const sweets = images.map(image => {
    return (
      <img
        key={image.id}
        src={image.img}
        alt="sweet"
        style={{
          left: `${Math.floor(Math.random() * (100 - 0 + 1)) + 0}vw`,
          top: `-100px`,
          animationDelay: `${(Math.random() * (5 - 0 + 1) + 0).toFixed(1)}s`,
          width: `${Math.floor(Math.random() * (60 - 30 + 1)) + 30}px`,
          animationDuration: `${(Math.random() * (10 - 8 + 1) + 8).toFixed(1)}s`
        }}
      />
    );
  });
  return (
    <section className="about main-section">
      <section className="animation-container">{sweets}</section>{" "}
      <section className="text">
        <h1>Welcome in the Candy Shop!</h1>
        <h2>We offer selection of finest sweets in the universe!</h2>
      </section>
    </section>
  );
};

export default About;
