import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@util/index";
import { TProduct } from "@customTypes/product";
import axios from "axios";
export const thankProductsByCatPrefix = createAsyncThunk(
  "products/thankProductsByCatPrefix",
  async (prefix: string, thunkApi) => {
    const { rejectWithValue, signal } = thunkApi;
    try {
      const res = await axios.get<TProduct[]>(
        `/products?cat_prefix=${prefix}`,
        { signal }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
