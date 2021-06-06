export const reducer = (state, action) => {
  if (action.type === "CLEAR_ITEMS") {
    return { ...state, cart: [] };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, loading: false, card: action.payload };
  }

  if (action.type === "GET_TOTALS") {
    let { item, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.item += amount;
        cartTotal.amount += amount * price;
        return cartTotal;
      },
      {
        amount: 0,
        item: 0,
      }
    );

    amount = parseFloat(amount.toFixed(2));

    return { ...state, totalItem: item, totalAmount: amount };
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
    const tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: tempCart };
  }
};
