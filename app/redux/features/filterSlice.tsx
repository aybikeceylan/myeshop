import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { store } from "../store";

interface initialState {
  filteredList: Array<any>;
  loadingFilter: boolean;
  errorFilter: any;
  find: any;
}

const initialState = {
  filteredList: [],
  loadingFilter: false,
  errorFilter: false,
  find: "",
};

export const getFilter = createAsyncThunk(
  "getFilter", //! action types
  async (thunkAPI, { rejectWithValue }) => {
    const selected = store.getState().category.choosen;
    console.log(selected);
    //! asyn callback function
    const url = `https://fakestoreapi.com/products/category/${selected}`;
    try {
      const { data } = await axios(url);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFind: (state, { payload }) => {
      state.find = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilter.pending, (state) => {
        state.loadingFilter = true;
      })
      .addCase(getFilter.fulfilled, (state, { payload }) => {
        state.filteredList = payload;
        console.log(payload);
        state.loadingFilter = false;
      })
      .addCase(getFilter.rejected, (state, { payload }) => {
        state.loadingFilter = false;
        //@ts-ignore
        state.errorFilter = payload;
      });
  },
});

export const { setFind } = filterSlice.actions;

export default filterSlice.reducer;
