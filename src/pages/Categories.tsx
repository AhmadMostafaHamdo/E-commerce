import { useAppDispatch, useAppSelector } from "@store/hooks";
import { thunkGetCategories } from "@store/categories/thunk/thunkGetCategories";
import { useEffect } from "react";
import { Loading } from "src/feedback";
import { GridList } from "@components/common";
import { Category } from "@components/ecommerce";

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

  return (
    <Loading error={error} state={loading}>
      <GridList
        records={records}
        renderItems={(records) => <Category {...records} />}
      />
    </Loading>
  );
};

export default Categories;
