import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Avengers from "./components/Avengers";
import Home from "./components/Home";
import data from "./data";

function App() {
  const [avengers] = useState(data);
  return (
    <div className="App">
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </nav>

      <Switch>
        <Route path="/avengers">
          <Avengers avengers={avengers} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
