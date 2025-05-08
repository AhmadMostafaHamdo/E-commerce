import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  productFullInfoCleanUp,
  thunkGetWishlist,
} from "@store/wishlist/wishlist";
import { useEffect } from "react";
const useWishlist = () => {
  const dispatch = useAppDispatch();
  const { error, loading, productFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);
  useEffect(() => {
    const promise = dispatch(thunkGetWishlist());
    return () => {
      dispatch(productFullInfoCleanUp());
      promise.abort();
    };
  }, [dispatch]);
  const records = productFullInfo.map((ele) => {
    return { ...ele, quantity: cartItems[ele.id], isLiked: true };
  });
  return { error, loading, records };
};

export default useWishlist;
