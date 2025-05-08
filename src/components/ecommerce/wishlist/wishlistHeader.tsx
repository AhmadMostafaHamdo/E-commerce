import styles from "./styles.module.css";
import WishlistImg from "../../../assets/svg/wishlist.svg?react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const { wishlistContainer, wishlistQuantity, pumpAnimate, container } = styles;
const WishListHeader = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = 1;
  const quantityStyle = `${wishlistQuantity} ${isAnimate ? pumpAnimate : ""}`;
  const navigate = useNavigate();
  useEffect(() => {
    if (!totalQuantity) return;
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalQuantity]);
  return (
    <>
      <div className={container} onClick={() => navigate("/wishlist")}>
        <div className={wishlistContainer}>
          <WishlistImg />
          {totalQuantity ? (
            <div className={quantityStyle}>{totalQuantity}</div>
          ) : (
            ""
          )}
        </div>
        <span
          style={{ fontSize: "20px", marginLeft: "1px", cursor: "pointer" }}
        >
          wishlist
        </span>
      </div>
    </>
  );
};

export default WishListHeader;
