import { createSlice } from "@reduxjs/toolkit";
import { thankProductsByCatPrefix } from "./thunkProduct/thankProductsByCatPrefix";
import { TProduct } from "@customTypes/product";
import { TLoading } from "@customTypes/shared";
interface IProductState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}
const initialState: IProductState = {
  records: [],
  loading: "idle",
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thankProductsByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(thankProductsByCatPrefix.fulfilled, (state, action) => {
      state.records = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(thankProductsByCatPrefix.rejected, (state) => {
      state.error = "An Expected Error";
    });
  },
});
export const { productsCleanUp } = productsSlice.actions;
export { thankProductsByCatPrefix };
export default productsSlice.reducer;
