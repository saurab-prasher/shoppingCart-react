import React from "react";
import Header from "./components/Header";
import CartContainer from "./components/CartContainer";
import { useGlobalContext } from "./context";
const App = () => {
  const {
    cart,
    calculateTotalItem,
    calculateTotalAmount,
    handleLoading,
    loading,
  } = useGlobalContext();

  if (loading) {
    return (
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: 500,
          textAlign: "center",
          marginTop: "5rem",
        }}
      >
        Loading...
      </h1>
    );
  }

  return (
    <div className="container">
      <Header />
      <CartContainer />
    </div>
  );
};

export default App;
