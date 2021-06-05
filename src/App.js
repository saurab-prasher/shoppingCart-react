import React from "react";
import Header from "./components/Header";
import CartContainer from "./components/CartContainer";
import { useGlobalContext } from "./context";
const App = () => {
  const {
    state: { totalItems, totalAmount },
    calculateTotalItem,
    calculateTotalAmount,
    handleLoading,
  } = useGlobalContext();

  return (
    <div className="container">
      <Header />
      <CartContainer />
    </div>
  );
};

export default App;
