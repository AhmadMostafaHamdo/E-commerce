import { Button, Form } from "react-bootstrap";
import style from "./style.module.css";
import { TProduct } from "@customTypes/product";
const {
  cartItemContainer,
  cartItemSelect,
  cartItemSelectOption,
  cartItemLeft,
  cartItemImg,
  cartItemInfo,
} = style;
type TCardItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantatiy: number) => void;
  removeItemHandler: (id: number) => void;
};
const CardItem = ({
  id,
  title,
  price,
  max,
  quantity,
  changeQuantityHandler,
  removeItemHandler,
}: TCardItemProps) => {
  const renderSelectOptions = Array(max)
    .fill(0)
    .map((_, index) => {
      const quantity = ++index;
      return <option key={quantity} value={quantity}>{quantity}</option>;
    });
  const changeQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = +e.target.value;
    changeQuantityHandler(id, quantity);
  };
  return (
    <div className={cartItemContainer}>
      <div className={cartItemLeft}>
        <div className={cartItemImg}>
          <img src="" alt="" />
        </div>
        <div className={cartItemInfo}>
          <div>
            <h2>{title}</h2>
            <h3>{price} SRY</h3>
          </div>
          <Button
            variant="secondary"
            style={{ width: "100px" }}
            onClick={() => removeItemHandler(id)}
          >
            Remove
          </Button>
        </div>
      </div>
      <div className={cartItemSelect}>
        <span>quantatiy</span>
        <Form.Select
          className={cartItemSelectOption}
          value={quantity}
          onChange={changeQuantity}
        >
          {renderSelectOptions}
        </Form.Select>
      </div>
    </div>
  );
};

export default CardItem;
