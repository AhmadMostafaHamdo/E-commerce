import { useEffect } from "react";
import { thankProductsByCatPrefix } from "@store/products/productsSlices";
import { useParams } from "react-router-dom";
import { productsCleanUp } from "@store/products/productsSlices";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Product } from "@components/ecommerce";
import { Col } from "react-bootstrap";
import { Loading } from "src/feedback";
import { GridList } from "@components/common";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector((state) => state.products);
  useEffect(() => {
    dispatch(thankProductsByCatPrefix(params.previex as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);
  return (
    <Loading state={loading} error={error}>
      <GridList
        records={records}
        renderItems={(records) => <Product {...records} />}
      />
    </Loading>
  );
};

export default Products;
