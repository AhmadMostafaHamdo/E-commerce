import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import {axiosErrorHandler} from "@util/index";
import axios from "axios";

export const thunkGetProductsByItems = createAsyncThunk(
  "cart/thunkGetProductsByItems",
  async (_, thunkApi) => {
    const { rejectWithValue, getState, fulfillWithValue ,signal} = thunkApi;
    const { cart } = getState() as RootState;
    const itemId = Object.keys(cart.items);
    if (!itemId.length) {
      return fulfillWithValue([]);
    }
    try {
      const isolatedItemId = itemId.map((ele) => `id=${ele}`).join("&");
      const res = await axios.get<TProduct[]>(`/products?${isolatedItemId}`,{signal});
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
