import RouteSwitch from "./RouteSwitch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";
import { queryByTestId } from "@testing-library/react";

function App() {
  const [cart, setCart] = useState([
    { name: "onion", qty: 2, price: 32 },
    { name: "carrot", qty: 3, price: 5 },
  ]);

  const toggleCartView = () => {
    const cartEl = document.querySelector(".cart-modal");
    cartEl.style.display === "none"
      ? (cartEl.style.display = "block")
      : (cartEl.style.display = "none");
  };

  const addToCart = (item, qty) => {
    const currCart = cart;
    const itemIndex = currCart.filter((el) => el.name === item);
    if (itemIndex) {
      currCart[item].qty += qty;
    } else {
      currCart.push({ name: item, qty: qty });
    }
    setCart(currCart);
  };

  return (
    <>
      <Nav cartQty={cart.length} toggle={toggleCartView} />
      <Cart list={cart} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={() => addToCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
