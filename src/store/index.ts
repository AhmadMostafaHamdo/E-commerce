import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlices";
import cart from "./cart/cartSlice";
import wishlist from "./wishlist/wishlist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const cartPersistConfig = {
  key: "root",
  storage,
  whitelist: ["items"],
};
const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whitelist: ["itemsId"],
};

const rootReducer = combineReducers({
  categories,
  products,
  wishlist: persistReducer(wishlistPersistConfig, wishlist),
  cart: persistReducer(cartPersistConfig, cart),
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// to find error if we select incorrect state
export type RootState = ReturnType<typeof store.getState>;
// to find error if we select incorrect action
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);
export { persistor, store };
