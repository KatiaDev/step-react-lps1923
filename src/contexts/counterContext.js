import { createContext, useState } from "react";

export const CounterContext = createContext();
console.log("CounterContext", CounterContext);

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const value = {
    counter,
    setCounter,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
