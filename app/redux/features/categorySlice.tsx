import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialState {
  categoryList: Array<any>;
  choosen: String;
  loading: boolean;
  error: any;
}

const initialState = {
  categoryList: [],
  choosen: "",
  loadingCategory: false,
  errorCategory: false,
};

export const getCategory = createAsyncThunk(
  "getCategory", //! action types

  async (thunkAPI, { rejectWithValue }) => {
    //! asyn callback function
    const url = `https://fakestoreapi.com/products/categories`;
    try {
      const { data } = await axios(url);

      return data;
      console.log(data);
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

const categorySlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setChoosen: (state, { payload }) => {
      state.choosen = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loadingCategory = true;
      })
      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.categoryList = payload;
        console.log(payload);
        state.loadingCategory = false;
      })
      .addCase(getCategory.rejected, (state, { payload }) => {
        state.loadingCategory = false;
        // @ts-ignore
        state.errorCategory = payload;
      });
  },
});

export const { setChoosen } = categorySlice.actions;

export default categorySlice.reducer;
