import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "@customTypes/category";
import axios from "axios";
import { axiosErrorHandler } from "@util/index";
export const thunkGetCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkApi) => {
    const { rejectWithValue, signal } = thunkApi;
    try {
      const res = await axios.get<TCategory[]>("/categories", { signal });
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
