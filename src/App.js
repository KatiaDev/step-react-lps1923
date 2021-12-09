import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counterActions";

function App() {
  const { counter } = useSelector((store) => store);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      {/* <button onClick={() => setMessage("Hello!!")}>ClickMe</button>
       <Child message={message} /> */}
    </div>
  );
}

export default App;
