import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([
    { name: "onion", qty: 2, price: 32 },
    { name: "carrot", qty: 3, price: 5 },
  ]);

  useEffect(() => {

  })

  const toggleCartView = () => {
    const cartEl = document.querySelector(".cart-modal");
    cartEl.style.display === "none"
      ? (cartEl.style.display = "block")
      : (cartEl.style.display = "none");
  };

  const handleCartAdd = (item, qty, price) => {
    const currCart = [...cart];
    if (currCart.some(el => el.name === item)) {
      const currItem = currCart.filter(el => el.name === item)[0]
      currItem.qty += qty;
    } else {
      currCart.push({name: item, qty, price});
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
          <Route path="/shop" element={<Shop handleCartAdd={handleCartAdd} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
