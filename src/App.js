import React, { Component, useState } from "react";
import { useContext } from "react";
import Child from "./Child";
import { CounterContext } from "./contexts/counterContext";

function App() {
  const { counter, setCounter } = useContext(CounterContext);
  const [message, setMessage] = useState("");

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      <button onClick={() => setMessage("Hello!!")}>ClickMe</button>
      <Child message={message} />
    </div>
  );
}

export default App;
