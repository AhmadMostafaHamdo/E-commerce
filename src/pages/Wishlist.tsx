import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";
import { TProduct } from "@customTypes/product";
import useWishlist from "@hooks/useWishlist";

import { Loading } from "src/feedback";
import LottieHandler from "src/feedback/lottieHandler/lottieHandler";

const Wishlist = () => {
  const { error, loading, records } = useWishlist();
  return (
    <>
      <Heading title="Wishlist" />
      <Loading state={loading} error={error} type="product">
        {records ? (
          <GridList<TProduct>
            records={records}
            renderItems={(record) => <Product {...record} />}
            message="your wishlist is empty"
          />
        ) : (
          <LottieHandler
            type="emptyWishlist"
            message="Your Wishlist Is Empty"
          />
        )}
      </Loading>
    </>
  );
};

export default Wishlist;
