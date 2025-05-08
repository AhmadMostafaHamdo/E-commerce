import { createSlice } from "@reduxjs/toolkit";
import { thunkGetCategories } from "./thunk/thunkGetCategories";
import { TCategory } from "@customTypes/category";
import { TLoading } from "@customTypes/shared";
import { isString } from "@customTypes/guards";
interface ICategoriesState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}
const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    cleanUpCategories: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(thunkGetCategories.fulfilled, (state, action) => {
      state.records = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(thunkGetCategories.rejected, (state, action) => {
      state.loading = "rejected";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});
export const {cleanUpCategories} = categoriesSlice.actions;
export default categoriesSlice.reducer;
