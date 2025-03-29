import { createSlice } from "@reduxjs/toolkit";
import { thunkGetCategories } from "./thunk/thunkGetCategories";
import { TCategory } from "@customTypes/category";
import { TLoading } from "@customTypes/shared";
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
  reducers: {},
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
      if (action.payload && typeof action.payload == "string") {
        state.error = action.payload;
      }
    });
  },
});
export default categoriesSlice.reducer;
