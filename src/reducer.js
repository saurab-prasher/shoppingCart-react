export const reducer = (state, action) => {
  if (action.type === "CLEAR_ITEMS") {
    return { ...state, list: [] };
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

  if (action.type === "INCREASE_ITEM") {
    const id = action.payload;

    // const item = state.list.find((item) => item.id === id);
    // const foundIndex = state.list.findIndex((x) => x.id === id);

    // state.list[foundIndex] = item;
    // const newList = state.list;

    // console.log(newList);

    return { ...state };
  }
};
