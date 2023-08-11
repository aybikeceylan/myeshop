import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  cardItem: {
    item: {
      image: any;
      title: any;
      price: any;
      id?: any;
    };
  };
  cardCount: number | string | null;
};

const initialState = {
  //@ts-ignore
  cardItem: JSON.parse(localStorage.getItem("card")) || [],
  // @ts-ignore
  cardCount: JSON.parse(localStorage.getItem("card"))?.length || 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCardItem: (state, { payload }) => {
      state.cardItem = [...state.cardItem, payload];
      console.log("cardItem", payload);
      localStorage.setItem("card", JSON.stringify(state.cardItem));
    },
    setCardCount: (state) => {
      state.cardCount = state.cardItem.length;
      console.log("cardCount", state.cardItem.length);
      localStorage.setItem("cardCount", JSON.stringify(state.cardCount));
    },

    removeItemFromCard: (state, { payload }) => {
      state.cardItem = state.cardItem.filter(
        (item: any) => item?.id != payload.id
      );
      localStorage.setItem("card", JSON.stringify(state.cardItem));
      state.cardCount = state.cardItem.length;
      localStorage.setItem("cardCount", JSON.stringify(state.cardCount));
    },
    clearAll: (state) => {
      state.cardItem = [];
      localStorage.setItem("card", JSON.stringify(state.cardItem));
      state.cardCount = "";
      localStorage.setItem("cardCount", JSON.stringify(state.cardCount));
    },
    setCardDecrease: (state, { payload }) => {
      state.cardItem = payload;
      localStorage.setItem("card", JSON.stringify(state.cardItem));
    },
  },
});

export const {
  setCardItem,
  setCardCount,
  removeItemFromCard,
  clearAll,
  setCardDecrease,
} = cardSlice.actions;

export default cardSlice.reducer;
