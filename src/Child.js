import React from "react";
import SecondChild from "./SecondChild";

const Child = (props) => {
  return (
    <>
      <h1>{props.message}</h1>
      <SecondChild></SecondChild>
    </>
  );
};

export default Child;
