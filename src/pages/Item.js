import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const Item = (props) => {
  const params = useParams();
  const dispatch = useDispatch();

  const item = props.books.find((book) => {
    return book.isbn13 === params.id;
  });

  const dispatchAddItem = () => {
    dispatch(addToCart(item.isbn13));
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
