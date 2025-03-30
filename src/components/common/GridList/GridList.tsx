import { Col } from "react-bootstrap";
import React from "react";

type TGridList<T> = {
  records: T[];
  renderItems: (records: T) => React.ReactNode;
};
type HasId = {
  id?: number;
};
const GridList = <T extends HasId>({ records, renderItems }: TGridList<T>) => {
  const categoriesList =
    records.length > 0
      ? records.map((record) => {
          return (
            <Col
              key={record.id}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              {renderItems(record)}
            </Col>
          );
        })
      : "there are no categories";
  return <div className="d-flex flex-wrap">{categoriesList}</div>;
};

export default GridList;
