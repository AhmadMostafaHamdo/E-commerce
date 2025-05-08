import { createSlice } from "@reduxjs/toolkit";
import { thunkWishlistToggle } from "./thunk/thunkWishlistToggle";
import { thunkGetWishlist } from "./thunk/thunkGetWishlist";
import { TProduct } from "@customTypes/product";
import { TLoading } from "@customTypes/shared";
import { isString } from "@customTypes/guards";
interface IWishListState {
  itemsId: number[];
  productFullInfo: TProduct[];
  error: null | string;
  loading: TLoading;
}
const initialState: IWishListState = {
  itemsId: [],
  productFullInfo: [],
  error: null,
  loading: "idle",
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    productFullInfoCleanUp: (state) => {
      state.productFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkWishlistToggle.pending, (state) => {
      state.error = null;
    });
    builder.addCase(thunkWishlistToggle.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.itemsId.push(action.payload.id);
      } else {
        state.itemsId = state.itemsId.filter((ele) => ele != action.payload.id);
        state.productFullInfo = state.productFullInfo.filter(
          (ele) => ele.id != action.payload.id
        );
      }
    });
    builder.addCase(thunkWishlistToggle.rejected, (state, action) => {
      if (action.payload && typeof action.payload == "string") {
        state.error = action.payload;
      }
    });
    // get wishlist items
    builder.addCase(thunkGetWishlist.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });
    builder.addCase(thunkGetWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productFullInfo = action.payload;
    });
    builder.addCase(thunkGetWishlist.rejected, (state, action) => {
      state.loading = "rejected";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});
export { thunkWishlistToggle, thunkGetWishlist };
export const { productFullInfoCleanUp } = wishlistSlice.actions;
export default wishlistSlice.reducer;
