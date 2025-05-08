import CardItem from "@components/cardItem/CardItem";
import { TProduct } from "@customTypes/product";
type CartItemListProps = {
  products: TProduct[];
  changeQuantityHandler: (id: number, quantatiy: number) => void;
  removeItemHandler: (id: number) => void;
};
const CartItemList = ({
  products,
  changeQuantityHandler,
  removeItemHandler,
}: CartItemListProps) => {
  const listOfProducts = products.map((ele) => (
    <CardItem
      {...ele}
      key={ele.id}
      changeQuantityHandler={changeQuantityHandler}
      removeItemHandler={removeItemHandler}
    />
  ));
  return <div>{listOfProducts}</div>;
};

export default CartItemList;
