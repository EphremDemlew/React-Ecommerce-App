// import logo from "./assets/download.png";
import "./app.css";
import PersonList from "./components/products";
import Nav from "./pages/Nav";
import Footer from "./pages/footer";
import Card from "./pages/card";
import Form from "./pages/FormInput";
import Register from "./pages/Register";
import Ditem from "./components/demoItems";
import Item from "./components/item";
import Cart from "./pages/Cart";

import { useState } from "react";

function App(props) {
  let [cart, setCart] = useState(0);
  const [items, addItems] = new useState([]);
  const [onCart, setOnCart] = useState([]);
  const addItemToCart = (e) => {
    setCart((cart = cart + 1));
    setOnCart([
      ...onCart,
      items.filter((filteredItems) => filteredItems._id == e.target.value),
    ]);
  };
  return (
    <div>
      <Nav cart={cart} />
      <Card
        cart={cart}
        setCart={setCart}
        items={items}
        addItems={addItems}
        setOnCart={setOnCart}
        onCart={onCart}
        addItemToCart={addItemToCart}
      />
      <Cart onCart={onCart} />
      <Footer />
    </div>
  );
}

export default App;
