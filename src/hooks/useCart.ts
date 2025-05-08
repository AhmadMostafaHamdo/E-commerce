import {
  cartItemChangeQuantity,
  cartItemRemove,
  cleanCartProductsFullInfo,
  thunkGetProductsByItems,
} from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";
const useCart = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );
  useEffect(() => {
    dispatch(thunkGetProductsByItems());
    return () => {
      dispatch(cleanCartProductsFullInfo());
    };
  }, [dispatch]);
  const productsFullInfoWithQuantity = productsFullInfo.map((ele) => {
    return { ...ele, quantity: items[ele.id] };
  });
  const ids = Object.keys(items);
  const products = productsFullInfoWithQuantity.filter((ele) =>
    ids.includes(ele.id)
  );
  const changeQuantityHandler = useCallback(
    (id: number, quantatiy: number) => {
      dispatch(cartItemChangeQuantity({ id, quantatiy }));
    },
    [dispatch]
  );
  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );
  return { loading, error, products, changeQuantityHandler, removeItemHandler };
};

export default useCart;
