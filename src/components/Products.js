import React, { Component } from "react";
import "../styles/products.sass";
import Basket from "./Basket.js";
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

class Products extends Component {
  state = {
    products: [
      { id: 1, name: "Chocolate Ice", img: `${ChocIce}`, quantity: 1 },
      { id: 2, name: "Chocolate Bar", img: `${ChocBar}`, quantity: 1 },
      { id: 3, name: "Chocolate Cookies", img: `${ChocCookies}`, quantity: 1 },
      { id: 4, name: "Fruit Cup", img: `${FruitCup}`, quantity: 1 },
      { id: 5, name: "Fruit Cone", img: `${FruitIce}`, quantity: 1 },
      { id: 6, name: "Fruit Lollipop", img: `${FruitLolli}`, quantity: 1 },
      { id: 7, name: "Lemon Cake", img: `${LemonCake}`, quantity: 1 },
      { id: 8, name: "Banana Cup", img: `${LemonCup}`, quantity: 1 },
      { id: 9, name: "Strawberry Donut", img: `${StrawDonut}`, quantity: 1 },
      { id: 10, name: "Strawberry Ice", img: `${StrawIce}`, quantity: 1 },
      { id: 11, name: "Strawberry Muffin", img: `${StrawMuffin}`, quantity: 1 },
      { id: 12, name: "Strawberry Candy", img: `${StrawSweet}`, quantity: 1 },
      {
        id: 13,
        name: "Chocolate Straw.",
        img: `${StrawWitchChoc}`,
        quantity: 1
      },
      { id: 14, name: "Toffee Pancakes", img: `${ToffeePan}`, quantity: 1 },
      { id: 15, name: "Sugar Donut", img: `${SugarDonut}`, quantity: 1 }
    ],
    basketActive: false,
    checkoutClicked: false
  };
  handleQuantity = e => {
    const products = this.state.products.map(product => {
      if (e.target.attributes.product.value === product.name) {
        product.quantity = e.target.value;
      }

      return product;
    });
    this.setState({ products });
  };

  handleBasketActive = () => {
    this.setState({ basketActive: !this.state.basketActive });
  };

  handleCheckout = () => {
    this.setState({ checkoutClicked: true });
    setTimeout(() => {
      this.setState({ checkoutClicked: false });
    }, 1500);
  };
  render() {
    const products = this.state.products.map(product => {
      return (
        <section className="product" key={product.id}>
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <form
            className="input"
            onSubmit={e =>
              this.props.click(e, product.id, product.name, product.quantity)
            }
          >
            <label htmlFor="number">Quantity:</label>{" "}
            <input
              type="number"
              min="1"
              max="10"
              id="number"
              value={product.quantity}
              product={product.name}
              onChange={this.handleQuantity}
            />
            <button type="submit">Add to basket</button>
          </form>
        </section>
      );
    });
    return (
      <>
        <section className="products main-section">
          <div className="products-container">{products}</div>
          <div className="authors">
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/smashicons"
              title="Smashicons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smashicons
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.flaticon.com
            </a>{" "}
          </div>
        </section>
        <Basket
          click={this.handleBasketActive}
          basketActive={this.state.basketActive}
          basket={this.props.basket}
          handleProductRemove={this.props.handleProductRemove}
          checkoutClicked={this.state.checkoutClicked}
          handleChoeckout={this.handleCheckout}
          cartIconTrigger={this.props.cartIconTrigger}
          data-simplebar
        />
      </>
    );
  }
}

export default Products;
