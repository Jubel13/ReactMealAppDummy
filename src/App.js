import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCart, setIsCart] = useState(false);

  const showCartHandler = () => {
    setIsCart(true);
  };

  const hideCartHandler = () => {
    setIsCart(false);
  };
  return (
    <CartProvider>
      {isCart && <Cart onHide={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
