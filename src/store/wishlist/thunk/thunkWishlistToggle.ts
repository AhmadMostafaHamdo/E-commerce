import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@util/index";
import axios from "axios";
export const thunkWishlistToggle = createAsyncThunk(
  "wishlist/thunkWishlistToggle",
  async (id: number, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const isRecordExist = await axios.get(`/wishlist?productId=${id}`);
      if (isRecordExist.data.length > 0) {
        await axios.delete(`/wishlist/${isRecordExist.data[0].id}`);
        return { type: "remove", id };
      } else {
        await axios.post("/wishlist", { productId: id });
        return { type: "add", id };
      }
    } catch (err) {
      return rejectWithValue(axiosErrorHandler(err));
    }
  }
);
