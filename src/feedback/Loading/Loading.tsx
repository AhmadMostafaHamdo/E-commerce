import { TLoading } from "@customTypes/shared";
import React from "react";

type LoadingProps = {
  state: TLoading;
  error: null | string;
  children: React.ReactNode;
};
const Loading = ({ state, error, children }: LoadingProps) => {
  if (state == "pending") {
    return <p>Loading ...</p>;
  }
  if (state == "rejected") {
    return error;
  }
  return <>{children}</>;
};

export default Loading;
