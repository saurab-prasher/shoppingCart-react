import React, { useContext, useReducer, useEffect } from "react";
import data from "./data";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
  totalItem: 1,
  totalAmount: 99,
  cart: data,
  loading: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

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
        handleLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
