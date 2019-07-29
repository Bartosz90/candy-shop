import React from "react";
import "../styles/products.sass";

const Basket = ({
  basketActive,
  click,
  basket,
  handleProductRemove,
  handleChoeckout,
  checkoutClicked
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
        <ul className="list">{cart}</ul>
      )}

      <div className={"shopping-cart"} onClick={click}>
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
