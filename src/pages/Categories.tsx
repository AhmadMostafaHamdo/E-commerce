import { Category } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { thunkGetCategories } from "@store/categories/thunk/thunkGetCategories";
import { useEffect } from "react";
import { Col } from "react-bootstrap";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (!records.length) {
      dispatch(thunkGetCategories());
    }
  }, [dispatch, records]);
  const categoriesList =
    records.length > 0
      ? records.map((record) => {
          return (
            <Col
              key={record.id}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Category {...record} />
            </Col>
          );
        })
      : "there are no categories";
  return <div className="d-flex flex-wrap">{categoriesList}</div>;
};

export default Categories;
