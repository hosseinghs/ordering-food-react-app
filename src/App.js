import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="App">
      {showCart && <Cart onCartClose={() => setShowCart(false)} />}
      <Header onCartClick={() => setShowCart(true)} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
