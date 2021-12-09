import { createContext, useReducer } from "react";

export const CounterContext = createContext();
console.log("CounterContext", CounterContext);

const initialState = {
  counter: 0,
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  //const [counter, setCounter] = useState(0);
  //const [filtered, setFiltered]

  const value = {
    state,
    dispatch,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
