import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const ShoppingCart = () => {
  const { cartItems } = useSelector((state) => state);

  const cartSum = cartItems
    .reduce((acc, curr) => {
      const converted = curr.price.split("$").find((el) => {
        return el;
      });
      return parseFloat(acc) + parseFloat(converted);
    }, 0)
    .toFixed(2);

  return (
    <div className="shopping-cart">
      {cartItems.map((item) => {
        return <CartItem key={item.isbn13} item={item} />;
      })}

      <div className="shopping-cart__checkout">
        <p>Total: $ {cartSum} </p>
        <button className="shopping-cart_item-button">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
