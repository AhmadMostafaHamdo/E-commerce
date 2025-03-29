import { TProduct } from "@customTypes/product";
import styles from "./styles.module.css";
import { Button } from "react-bootstrap";

const { product, productImg } = styles;
const Product = ({ title, img, price }: TProduct) => {
  const shortTitle = title.substring(1, 16);
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src={
            "https://cdn-eu.dynamicyield.com/api/9876644/images/cfb357649428__hp-w12-22032022-h_m-men.jpg"
          }
          alt={title}
        />
      </div>
      <h2>{shortTitle.length > 14? shortTitle + "..." : shortTitle}...</h2>
      <h3>{price} SYP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to card
      </Button>
    </div>
  );
};

export default Product;
