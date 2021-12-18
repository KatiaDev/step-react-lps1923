import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

const Item = (props) => {
  const params = useParams();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state);

  const item = props.books.find((book) => {
    return book.isbn13 === params.id;
  });

  const dispatchAddItem = () => {
    const newItem = cartItems.find((element) => {
      return item.isbn13 === element.isbn13;
    });

    const nextItem = props.books.find((element) => {
      return element.isbn13 === item.isbn13;
    });

    if (newItem) {
      alert("Item already selected.");
    } else {
      return dispatch(addToCart(nextItem));
    }
  };
  // console.log("item: ", item);
  // console.log("books", props.books);

  return (
    <div className="product">
      {item ? (
        <>
          <h1>{item.title}</h1>
          <img src={item.image} className="product-img" alt="product" />
          <a href={item.url}>{item.url}</a>
          <h2>{item.subtitle}</h2>
          <h3>{item.price}</h3>
          <button onClick={dispatchAddItem} className="product-button">
            Add to Cart
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Item;
