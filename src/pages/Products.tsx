import { useEffect } from "react";
import { thankProductsByCatPrefix } from "@store/products/productsSlices";
import { useParams } from "react-router-dom";
import { productsCleanUp } from "@store/products/productsSlices";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Product } from "@components/ecommerce";
import { Col } from "react-bootstrap";
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
  const prouctsList =
    records.length > 0
      ? records.map((record) => {
          return (
            <Col
              key={record.id}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Product {...record} />
            </Col>
          );
        })
      : "there are no categories";
  return <div className="d-flex flex-wrap">{prouctsList}</div>;
};

export default Products;
