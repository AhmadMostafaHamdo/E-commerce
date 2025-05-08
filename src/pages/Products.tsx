import { Product } from "@components/ecommerce";
import { Loading } from "src/feedback";
import { GridList, Heading } from "@components/common";
import useProducts from "@hooks/useProducts";
const Products = () => {
  const { error, loading, params, productFullInfo } = useProducts();
  return (
    <Loading state={loading} error={error} type="product">
      <Heading title={`${params.prefix} Products`} />

      <GridList
        records={productFullInfo}
        renderItems={(record) => <Product {...record} />}
      />
    </Loading>
  );
};

export default Products;
