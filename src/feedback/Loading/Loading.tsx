import { TLoading } from "@customTypes/shared";
import React from "react";
import CartSkeleton from "../sketlons/CartSketlon";
import ProductSkeleton from "../sketlons/ProductSketlon";
import CategorySkeleton from "../sketlons/CategorySketlon";
import LottieHandler from "../lottieHandler/lottieHandler";
type LoadingProps = {
  state: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof sketlonTypes;
};
const sketlonTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
};
const Loading = ({
  state,
  error,
  children,
  type = "category",
}: LoadingProps) => {
  const Component = sketlonTypes[type];
  if (state == "pending") {
    return <Component />;
  }
  if (state == "rejected") {
    return <LottieHandler type="networkError" message={error as string} />;
  }
  return <>{children}</>;
};

export default Loading;
