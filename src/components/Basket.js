import React from "react";
import "../styles/products.sass";
import { Scrollbars } from "react-custom-scrollbars";

const Basket = ({
  basketActive,
  click,
  basket,
  handleProductRemove,
  handleChoeckout,
  checkoutClicked,
  cartIconTrigger
}) => {
  const cart = basket.map(product => {
    return (
      <li key={product.id}>
        <p> {product.name},</p>
        <p>quantity: {product.quantity},</p>
        <button id={product.id} onClick={handleProductRemove}>
          <i className="fas fa-trash-alt" />
        </button>
      </li>
    );
  });
  return (
    <section className={basketActive ? "basket active" : "basket"}>
      {basket.length === 0 ? (
        <h1
          style={{
            color: "white",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)"
          }}
        >
          Empty :(
        </h1>
      ) : (
        <Scrollbars style={{ width: "350px", minHeight: "40vh" }}>
          <ul className="list">{cart}</ul>
        </Scrollbars>
      )}

      <div
        className={"shopping-cart"}
        onClick={click}
        style={{
          animation: `${cartIconTrigger ? "shadow .5s ease forwards" : "none"}`
        }}
      >
        {basketActive ? (
          <i className="fas fa-times-circle" />
        ) : (
          <i className="fas fa-shopping-cart" />
        )}
      </div>
      <button
        className={checkoutClicked ? "checkout active" : "checkout"}
        onClick={handleChoeckout}
      >
        Checkout
      </button>
    </section>
  );
};

export default Basket;
