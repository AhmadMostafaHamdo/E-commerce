import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";
import axios from "axios";
export const thankProductsByCatPrefix = createAsyncThunk(
  "products/thankProductsByCatPrefix",
  async (prefix: string, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get<TProduct[]>(
        `http://localhost:5005/products?cat_prefix=${prefix}`
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An Expected Error");
      }
    }
  }
);
