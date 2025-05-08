import { useAppDispatch, useAppSelector } from "@store/hooks";
import { thunkGetCategories } from "@store/categories/thunk/thunkGetCategories";
import { useEffect } from "react";
import { cleanUpCategories } from "@store/categories/categoriesSlice";

const useCategories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    const promise = dispatch(thunkGetCategories());
    return () => {
      dispatch(cleanUpCategories());
      return promise.abort();
    };
  }, [dispatch]);
  return { loading, error, records };
};

export default useCategories;
