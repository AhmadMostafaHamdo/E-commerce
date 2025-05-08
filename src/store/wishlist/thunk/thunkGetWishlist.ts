import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@util/index";
import axios from "axios";

export const thunkGetWishlist = createAsyncThunk(
  "wishlist/thunkGetWishlist",
  async (_, thunkApi) => {
    const { rejectWithValue, fulfillWithValue, signal } = thunkApi;
    try {
      let userWishlist = await axios.get<{ productId: number }[]>(
        "/wishlist?userId=1",
        { signal }
      );
      if (!userWishlist.data.length) {
        return fulfillWithValue([]);
      }
      const concatenatedItemsId = userWishlist.data
        .map((ele) => `id=${ele.productId}`)
        .join("&");
      const res = await axios.get<TProduct[]>(`/products?id=2`);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
