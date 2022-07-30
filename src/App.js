import { useState } from "react";
import CartProvider from "./context/CartProvicer";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <CartProvider className="App">
      {showCart && <Cart onCartClose={() => setShowCart(false)} />}
      <Header onCartClick={() => setShowCart(true)} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
