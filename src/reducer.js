export const reducer = (state, action) => {
  if (action.type === "CLEAR_ITEMS") {
    return { ...state, cart: [] };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, loading: false, cart: action.payload };
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

  if (action.type === "TOGGLE_ITEM") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "INCREASE_ITEM") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === "DECREASE_ITEM") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
};
