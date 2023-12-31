import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  cartItem: any;
  cartCount: any;
};

const initialState = {
  cartItem: [],

  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItem: (state, { payload }) => {
      //@ts-ignore
      state.cartItem = [...state.cartItem, payload];
      console.log("cartItem", payload);

      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    setCartCount: (state) => {
      //@ts-ignore

      state.cartCount = state.cartItem.length;
      console.log("cartCount", state.cartItem.length);

      //@ts-ignore
      localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
    },
    setFirstRenderCartItem: (state, { payload }) => {
      //@ts-ignore
      state.cartItem = [...state.cartItem, payload];
      console.log("cartItem", payload);
    },
    setFirstRenderCartCount: (state) => {
      //@ts-ignore

      state.cartCount = state.cartItem.length;
      console.log("cartCount", state.cartItem.length);
    },

    removeItemFromCart: (state, { payload }) => {
      state.cartItem = state.cartItem.filter(
        (item: any) => item?.id != payload.id
      );

      localStorage.setItem("cart", JSON.stringify(state.cartItem));

      //@ts-ignore

      state.cartCount = state.cartItem.length;

      //@ts-ignore
      localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
    },
    clearAll: (state) => {
      state.cartItem = [];

      localStorage.setItem("cart", JSON.stringify(state.cartItem));

      //@ts-ignore
      state.cartCount = "";

      //@ts-ignore
      localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
    },
    setCartDecrease: (state, { payload }) => {
      state.cartItem = payload;

      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
  },
});

export const {
  setCartItem,
  setCartCount,
  removeItemFromCart,
  clearAll,
  setCartDecrease,
  setFirstRenderCartCount,
  setFirstRenderCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
