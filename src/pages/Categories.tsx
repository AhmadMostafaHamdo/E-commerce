import { Loading } from "src/feedback";
import { GridList, Heading } from "@components/common";
import { Category } from "@components/ecommerce";
import useCategories from "@hooks/useCategories";

const Categories = () => {
  const { error, loading, records } = useCategories();
  return (
    <Loading error={error} state={loading} type="category">
      <Heading title="Categories" />
      <GridList
        records={records}
        renderItems={(records) => <Category {...records} />}
        message="your categories is empty"
      />
    </Loading>
  );
};

export default Categories;
