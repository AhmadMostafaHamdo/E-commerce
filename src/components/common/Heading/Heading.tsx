import React from "react";

const Heading = ({ title }: { title: React.ReactNode }) => {
  return (
    <div className="mb-3" style={{ fontSize: "26px" }}>
      {title}
    </div>
  );
};

export default Heading;
