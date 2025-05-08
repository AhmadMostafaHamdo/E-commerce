import styles from "./styles.module.css";
import Logo from "../../../assets/svg/cart.svg?react";
import { useAppSelector } from "@store/hooks";
import { getTotalQuantity } from "@store/cart/selectors/getTotalQuantitySelectors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const { basketContainer, basketQuantity, pumpCartQuantity } = styles;
const HeaderBasket = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getTotalQuantity);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;
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
      <div
        style={{ display: "flex", alignItems: "end" }}
        onClick={() => navigate("/cart")}
      >
        <div className={basketContainer}>
          <Logo title="basket  icon" />
          {totalQuantity ? (
            <div className={quantityStyle}>{totalQuantity}</div>
          ) : (
            ""
          )}
        </div>
        <span
          style={{ fontSize: "20px", marginLeft: "4px", cursor: "pointer" }}
        >
          cart
        </span>
      </div>
    </>
  );
};

export default HeaderBasket;
