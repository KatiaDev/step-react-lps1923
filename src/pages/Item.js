import React from "react";
import { useParams } from "react-router-dom";

const Item = (props) => {
  const params = useParams();

  const item = props.books.filter((book) => {
    return book.isbn13 === params.id;
  });
  console.log("item: ", item);
  console.log("books", props.books);

  return (
    <div className="product">
      <img src={item.image} />
      <h1>Hello</h1>
    </div>
  );
};

export default Item;
