import React from "react";
import { useContext } from "react";
import { CounterContext } from "./contexts/counterContext";
import { INCREMENT, DECREMENT } from "./contexts/counterContext";

function App() {
  const { state, dispatch } = useContext(CounterContext);

  const handleIncrease = () => {
    dispatch({ type: INCREMENT });
  };

  const handleDecrease = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <div className="App">
      <h2>{state.counter}</h2>
      <button onClick={handleIncrease}> + </button>
      <button onClick={handleDecrease}> - </button>
      {/* <button onClick={() => setMessage("Hello!!")}>ClickMe</button>
       <Child message={message} /> */}
    </div>
  );
}

export default App;
