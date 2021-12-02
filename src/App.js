import { Link, Route, Switch } from "react-router-dom";
import Avengers from "./components/Avengers";
import Home from "./components/Home";

function App() {
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
        <Route path="/">
          <Home />
        </Route>
        <Route path="/avengers">
          <Avengers />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
