import React, { useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
  totalItem: 1,
  totalAmount: 99,
  cart: [],
  loading: false,
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  const toggleItem = (id, type) => {
    dispatch({ type: "TOGGLE_ITEM", payload: { id, type } });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_ITEMS" });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleClearCart,
        handleRemoveItem,
        toggleItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
