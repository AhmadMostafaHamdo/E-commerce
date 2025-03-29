import { configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlices";
export const store = configureStore({
  reducer: { categories, products },
});
// to find error if we select incorrect state
export type RootState = ReturnType<typeof store.getState>;
// to find error if we select incorrect action
export type AppDispatch = typeof store.dispatch;
