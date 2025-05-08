const isString = (value: string): value is string => {
  return typeof value === "string";
};
export { isString };
