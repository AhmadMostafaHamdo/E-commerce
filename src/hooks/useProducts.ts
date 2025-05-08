import { useEffect } from "react";
import { thankProductsByCatPrefix } from "@store/products/productsSlices";
import { useParams } from "react-router-dom";
import { productsCleanUp } from "@store/products/productsSlices";
import { useAppDispatch, useAppSelector } from "@store/hooks";
const useProducts = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { error, loading, records } = useAppSelector((state) => state.products);
  const items = useAppSelector((state) => state.cart.items);
  const wishlistId = useAppSelector((state) => state.wishlist.itemsId);
  const productFullInfo = records.map((ele) => ({
    ...ele,
    quantity: items[ele.id] || 0,
    isLiked: wishlistId.includes(ele.id),
  }));
  useEffect(() => {
    const promise = dispatch(thankProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
      promise.abort();
    };
  }, [dispatch, params]);
  return { loading, error, productFullInfo, params };
};

export default useProducts;
