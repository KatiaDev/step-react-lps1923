import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Items from "./pages/Items";
import ShoppingCart from "./pages/ShoppingCart";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  console.log("books", books);

  useEffect(() => {
    axios("https://api.itbook.store/1.0/search/react/2").then((response) =>
      setBooks(response.data.books)
    );
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/shopping-cart">
          <ShoppingCart books={books} />
        </Route>
        <Route path="/items/:id">
          <Item books={books} />
        </Route>
        <Route path="/items">
          <Items books={books} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
