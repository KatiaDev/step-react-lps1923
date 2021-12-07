import React from "react";
import { useContext } from "react";
import { CounterContext } from "./contexts/counterContext";

const SecondChild = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <h1>{counter}</h1>
    </>
  );
};

export default SecondChild;
