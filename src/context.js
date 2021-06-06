import React, { useContext, useReducer } from "react";
import data from "./data";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
  totalItems: 0,
  totalAmount: 99,
  cart: data,
  loading: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const calculateTotalAmount = () => {
    const total = state.cart
      .map((item) => item.price * item.amount)
      .reduce((acc, current) => {
        return acc + current;
      }, 0);

    dispatch({ type: "CALCULATE_TOTAL_AMOUNT", payload: total });
  };

  const calculateTotalItem = () => {
    const total = state.cart
      .map((item) => item.amount)
      .reduce((acc, current) => {
        return acc + current;
      }, 0);

    dispatch({ type: "CALCULATE_TOTAL_ITEM", payload: total });
  };

  const handleIncrement = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: id });
  };
  const handleDecrement = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_ITEMS" });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    console.log("remove item");
  };

  const handleLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleIncrement,
        handleDecrement,
        handleClearCart,
        handleRemoveItem,
        calculateTotalAmount,
        handleLoading,
        calculateTotalItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
