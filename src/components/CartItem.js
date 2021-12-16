import React from "react";

const CartItem = ({ itemId, books }) => {
  const foundItem = books.find((item) => {
    return item.isbn13 === itemId;
  });

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
            <button className="shopping-cart_item-button">Remove</button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CartItem;
