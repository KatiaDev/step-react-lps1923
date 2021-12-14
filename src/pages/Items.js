import React from "react";
import { Link } from "react-router-dom";

const Items = ({ books }) => {
  return (
    <div className="items-list-wrapper">
      {books.map((book) => {
        return (
          <div key={book.isbn13} className="item-card">
            <Link to={`/items/${book.isbn13}`}>
              <img src={book.image} alt="" className="items-list-image" />
            </Link>
            <p>{book.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
