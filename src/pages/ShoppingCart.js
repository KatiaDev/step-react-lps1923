import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const ShoppingCart = ({ books }) => {
  const { cartItems } = useSelector((state) => state);

  const cartSum = books.reduce((acc, curr) => {
    const converted = curr.price.split("$").find((el) => {
      return el;
    });

    cartItems.map((id) => {
      if (id === curr.isbn13) {
        console.log("converted", converted);
        return parseFloat(acc) + parseFloat(converted);
      }
      return 0;
    });

    return converted;
  }, 0);

  console.log("cartItems", cartItems);
  return (
    <div className="shopping-cart">
      {cartItems.map((item) => {
        return <CartItem key={item} itemId={item} books={books} />;
      })}

      <div className="shopping-cart__checkout">
        <p>Total: $ {cartSum} </p>
        <button className="shopping-cart_item-button">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
