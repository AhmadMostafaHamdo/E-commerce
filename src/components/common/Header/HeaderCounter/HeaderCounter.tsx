import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type THeaderCounterProps = {
  svgImg: React.ReactNode;
  title:string,
  totalQuantity: number;
  to: string;
};
const { wishlistContainer, wishlistQuantity, pumpAnimate, container } = styles;
const HeaderCounter = ({ svgImg,title, totalQuantity, to }: THeaderCounterProps) => {
  const [isAnimate, setIsAnimate] = useState(false);
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
      <div className={container} onClick={() => navigate(to)}>
        <div className={wishlistContainer}>
          {svgImg}
          {totalQuantity ? (
            <div className={quantityStyle}>{totalQuantity}</div>
          ) : (
            ""
          )}
        </div>
        <span
          style={{ fontSize: "20px", marginLeft: "1px", cursor: "pointer" }}
        >
          {title}
        </span>
      </div>
    </>
  );
};

export default HeaderCounter;
