import { TProduct } from "@customTypes/product";
import styles from "./styles.module.css";
import { Button, Spinner } from "react-bootstrap";
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/like-fill.svg?react";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { memo, useEffect, useState } from "react";
import { thunkWishlistToggle } from "@store/wishlist/wishlist";

const { product, productImg, wishlistBtn } = styles;
const Product = memo(
  ({ id, title, img, price, max, quantity, isLiked }: TProduct) => {
    const dispatch = useAppDispatch();
    const [isBtnClicked, setIsBtnClicked] = useState(0);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [isLoading, setIsLoding] = useState(false);
    const shortTitle = title.substring(1, 16);
    const addToCartHandler = () => {
      dispatch(addToCart(id));
      setIsBtnClicked((prev) => prev + 1);
    };
    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;
    useEffect(() => {
      if (!isBtnClicked) {
        return;
      }
      setIsBtnDisabled(true);
      const debounce = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);
      return () => clearTimeout(debounce);
    }, [isBtnClicked]);
    const likeToggleHandler = () => {
      setIsLoding(true);
      dispatch(thunkWishlistToggle(id))
        .unwrap()
        .then(() => setIsLoding(false))
        .catch(() => setIsLoding(false));
    };
    return (
      <div className={product}>
        <div className={productImg}>
          <div className={wishlistBtn} onClick={likeToggleHandler}>
            {isLoading ? (
              <Spinner animation="border" size="sm" variant="primary" />
            ) : isLiked ? (
              <LikeFill />
            ) : (
              <Like />
            )}
          </div>
          <img
            src={
              "https://cdn-eu.dynamicyield.com/api/9876644/images/cfb357649428__hp-w12-22032022-h_m-men.jpg"
            }
            alt={title}
          />
        </div>
        <h2>{shortTitle.length > 14 ? shortTitle + "..." : shortTitle}...</h2>
        <h3>{price} SYP</h3>
        <p style={{ fontSize: "14px" }}>
          {quantityReachedToMax
            ? "you reached to the limit"
            : `you can add ${currentRemainingQuantity}`}
        </p>
        <Button
          variant="info"
          style={{ color: "white" }}
          onClick={addToCartHandler}
          disabled={isBtnDisabled || quantityReachedToMax}
        >
          {isBtnDisabled ? (
            <>
              <Spinner animation="border" size="sm" />
              Loading...
            </>
          ) : (
            "Add to card"
          )}
        </Button>
      </div>
    );
  }
);

export default Product;
