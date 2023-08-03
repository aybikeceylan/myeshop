import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  isLoggedIn: boolean;
  email: string;
  userName: string;
  userId: string;
};

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  userID: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      console.log(action.payload);
      const { email, userName, userID } = action.payload;
      (state.isLoggedIn = true), (state.email = email);
      state.userName = userName;
      state.userID = userID;
    },
    removeActiveUser: (state, action) => {
      return initialState;
    },
  },
});

export const { setActiveUser, removeActiveUser } = authSlice.actions;

export default authSlice.reducer;
