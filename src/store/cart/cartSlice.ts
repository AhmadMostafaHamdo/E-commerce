import { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import { thunkGetProductsByItems } from "./thunk/thunkGetProductsByItems";
import { TLoading } from "@customTypes/shared";
import { isString } from "@customTypes/guards";
interface ICartState {
  items: {
    [id: string]: number;
  };
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
}
const initialState: ICartState = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    cartItemChangeQuantity: (state, action) => {
      state.items[action.payload.id] = +action.payload.quantatiy;
    },
    cartItemRemove: (state, action) => {
      delete state.items[action.payload];
      state.productsFullInfo = state.productsFullInfo.filter(
        (el) => el.id !== action.payload
      );
    },
    cleanCartProductsFullInfo: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetProductsByItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(thunkGetProductsByItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(thunkGetProductsByItems.rejected, (state, action) => {
      state.loading = "rejected";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const {
  addToCart,
  cartItemChangeQuantity,
  cartItemRemove,
  cleanCartProductsFullInfo,
} = cartSlice.actions;
export { thunkGetProductsByItems };
export default cartSlice.reducer;
