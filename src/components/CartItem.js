import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../actions/cartActions";

const CartItem = ({ item }) => {
  const { cartItems } = useSelector((state) => state);

  const dispatch = useDispatch();

  const foundItem = cartItems.find((el) => {
    return el.isbn13 === item.isbn13;
  });

  const dispatchRemoveItem = () => {
    dispatch(removeItem(foundItem.isbn13));
  };

  return (
    <div className="shopping-cart_item">
      {foundItem ? (
        <>
          <img
            src={foundItem.image}
            className="shopping-cart_item-img"
            alt="item"
          />

          <div>
            <h3 className="shopping-cart__title"> {foundItem.title}</h3>
            <p>{foundItem.price}</p>
            <button
              onClick={dispatchRemoveItem}
              className="shopping-cart_item-button"
            >
              Remove
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CartItem;
