import React from "react";

const Pizza = (props) => {
  const { values } = props;

  if (values.name) {
    return (
      <div id="your-pizza">
        <p>{`${values.name}'s Pizza`}</p>
        <p>Size: {values.dropdown}</p>
        <p>
          Toppings:{" "}
          {`${values.pepperoni ? "Pepperoni " : ""}${
            values.mush ? "Mushrooms " : ""
          }${values.fetta ? "Fetta Cheese " : ""}${
            values.italian ? "Italian Sausage " : ""
          }`}
        </p>
        <p>Special Instructions: {`${values.special}`}</p>
      </div>
    );
  } else {
    return <p>Order Your Pizza!</p>;
  }
};

export default Pizza;
