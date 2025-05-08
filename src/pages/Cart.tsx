import CartItemList from "@components/cardItemList/CartItemList";
import CardSubtotalPrice from "@components/cardSubtotalPrice/CardSubtotalPrice";
import { Heading } from "@components/common";
import useCart from "@hooks/useCart";

import { Loading } from "src/feedback";
import LottieHandler from "src/feedback/lottieHandler/lottieHandler";
const emptyCarts = {
  fontSize: "35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "30vh",
  color: "#636363",
};
const Cart = () => {
  const { loading, error, products, changeQuantityHandler, removeItemHandler } =
    useCart();
  return (
    <>
      <Heading title="Cart" />
      <Loading state={loading} error={error} type="cart">
        {products.length > 0 ? (
          <>
            {" "}
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CardSubtotalPrice products={products} />
          </>
        ) : (
          <LottieHandler
            type="emptyCart"
            message="You Don,t Have Carts"
          />
        )}
      </Loading>
    </>
  );
};

export default Cart;
