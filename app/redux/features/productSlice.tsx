import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialState {
  productList: Array<any>;
  finalList: Array<any>;
  sortingList: Array<any>;
  loading: boolean;
  error: any;
}

const initialState = {
  productList: [],
  finalList: [],
  sortingList: [],
  loading: false,
  error: false,
};

export const getProduct = createAsyncThunk(
  "getProduct", //! action types

  async (thunkAPI, { rejectWithValue }) => {
    //! asyn callback function
    const url = `https://fakestoreapi.com/products`;
    try {
      const { data } = await axios(url);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      state.productList = payload;
    },
    setFinalList: (state, { payload }) => {
      state.finalList = payload;
    },
    setSortingList: (state, { payload }) => {
      state.sortingList = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.productList = payload;
        console.log(payload);
        state.loading = false;
      })
      .addCase(getProduct.rejected, (state, { payload }) => {
        state.loading = false;
        // @ts-ignore
        state.error = payload;
      });
  },
});

export const { setProduct, setFinalList, setSortingList } =
  productSlice.actions;

export default productSlice.reducer;
