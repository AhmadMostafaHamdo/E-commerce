import { TProduct } from "@customTypes/product";
import style from "./style.module.css";
type CardSubtotalPriceProps = {
  products: TProduct[];
};
const CardSubtotalPrice = ({ products }: CardSubtotalPriceProps) => {
  const subtotal = products.reduce((acc, curr) => {
    const price = curr.price;
    const quantatiy = curr.quantity;
    if (quantatiy && typeof quantatiy === "number")
      return acc + price * quantatiy;
  }, 0);
  return (
    <div className={style.cardSubTotalPriceContainer}>
      <span>Subtotal:</span>
      <span>{subtotal} SRY</span>
    </div>
  );
};

export default CardSubtotalPrice;
