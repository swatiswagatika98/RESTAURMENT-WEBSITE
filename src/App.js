import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import MealList from "./Components/Meals/MealList";
import Summary from "./Components/UI/Summary";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      {cartOpen && <Cart setCartOpen={setCartOpen} />}
      <Header setCartOpen={setCartOpen} />
      <Summary />
      <MealList />
    </CartProvider>
  );
}

export default App;
