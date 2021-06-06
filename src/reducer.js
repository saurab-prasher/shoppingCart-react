export const reducer = (state, action) => {
  if (action.type === "CLEAR_ITEMS") {
    return { ...state, cart: [] };
  }

  if (action.type === "CALCULATE_TOTAL_AMOUNT") {
    const total = action.payload;
    return { ...state, totalAmount: total };
  }

  if (action.type === "CALCULATE_TOTAL_ITEM") {
    const total = action.payload;

    return { ...state, totalItems: total };
  }

  if (action.type === "SET_LOADING") {
    return { ...state, loading: false };
  }

  if (action.type === "REMOVE_ITEM") {
    const id = action.payload;
    const newCart = state.cart.filter((item) => item.id !== id);
    return { ...state, cart: newCart };
  }

  if (action.type === "INCREASE_ITEM") {
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE_ITEM") {
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload && item.amount > 0) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
};
