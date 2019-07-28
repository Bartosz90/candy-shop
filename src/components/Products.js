import React, { Component } from "react";
import "../styles/products.sass";
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

{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> messages.attribution.is_licensed_by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
}

class Products extends Component {
  state = {};

  products = [
    { id: 1, name: "Chocolate Ice", img: `${ChocIce}` },
    { id: 2, name: "Chocolate Bar", img: `${ChocBar}` },
    { id: 3, name: "Chocolate Cookies", img: `${ChocCookies}` },
    { id: 4, name: "Fruit Cup", img: `${FruitCup}` },
    { id: 5, name: "Fruit Cone", img: `${FruitIce}` },
    { id: 6, name: "Fruit Lollipop", img: `${FruitLolli}` },
    { id: 7, name: "lemon Cake", img: `${LemonCake}` },
    { id: 8, name: "lemon Cup", img: `${LemonCup}` },
    { id: 9, name: "Strawberry Donut", img: `${StrawDonut}` },
    { id: 10, name: "Strawberry Ice", img: `${StrawIce}` },
    { id: 11, name: "Strawberry Muffin", img: `${StrawMuffin}` },
    { id: 12, name: "Strawberry Candy", img: `${StrawSweet}` },
    { id: 13, name: "Chocolate Straw.", img: `${StrawWitchChoc}` },
    { id: 14, name: "Toffee Pancakes", img: `${ToffeePan}` },
    { id: 15, name: "Sugar Donut", img: `${SugarDonut}` }
  ];

  render() {
    const products = this.products.map(product => {
      return (
        <section className="product" key={product.id}>
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <div className="input">
            <label htmlFor="number">Quantity:</label>{" "}
            <input type="number" min="1" max="5" id="number" />
          </div>
          <button>Add to basket</button>
        </section>
      );
    });
    return (
      <section className="products main-section">
        <div className="products-container">{products}</div>
      </section>
    );
  }
}

export default Products;
