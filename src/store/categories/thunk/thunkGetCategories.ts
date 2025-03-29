import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "@customTypes/category";
import axios from "axios";
export const thunkGetCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get<TCategory[]>(
        "http://localhost:5005/categories"
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
