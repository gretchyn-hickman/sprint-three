import React from "react";

const Errors = (props) => {
  const { errors } = props;
  return (
    <div className="errors">
      <p>{errors.name}</p>
    </div>
  );
};

export default Errors;
