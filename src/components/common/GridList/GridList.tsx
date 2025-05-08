import { Col } from "react-bootstrap";
import React from "react";
import LottieHandler from "src/feedback/lottieHandler/lottieHandler";

type TGridList<T> = {
  records: T[];
  renderItems: (record: T) => React.ReactNode;
  message: string;
};
type HasId = {
  id?: number;
};
const GridList = <T extends HasId>({
  records,
  renderItems,
  message,
}: TGridList<T>) => {
  const categoriesList =
    records.length > 0 ? (
      records.map((record) => {
        return (
          <Col
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItems(record)}
          </Col>
        );
      })
    ) : (
      <LottieHandler type="emptyProduct" message={message} />
    );
  return <div className="d-flex flex-wrap">{categoriesList}</div>;
};

export default GridList;
