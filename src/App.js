import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [cartQty, setCartQty] = useState(0);

  useEffect(() => {
    let cartVals = cart.map(item => item.qty)
    let qty = cartVals.reduce((prev, curr) => prev + curr, 0);
    setCartQty(qty)
  }, [cart])

  const toggleCartView = (e) => {
    e.preventDefault();
    const cartEl = document.querySelector(".cart-modal");
    cartEl.style.display === "none"
      ? (cartEl.style.display = "block")
      : (cartEl.style.display = "none");
  };

  const handleCartAdd = (item, qty, price) => {
    const currCart = [...cart];
    if (currCart.some((el) => el.name === item)) {
      const currItem = currCart.filter((el) => el.name === item)[0];
      currItem.qty += qty;
    } else {
      currCart.push({ name: item, qty, price });
    }
    setCart(currCart);
  };

  return (
    <BrowserRouter>
      <Nav
        cartQty={cartQty}
        toggle={toggleCartView}
      />
      <Cart list={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop handleCartAdd={handleCartAdd} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
