import RouteSwitch from "./RouteSwitch";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Nav />
      <RouteSwitch />
    </>
  );
}

export default App;
