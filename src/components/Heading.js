import React from "react";
import { useGlobalContext } from "./Context";

const Heading = () => {
  const { list } = useGlobalContext();

  const allValues = list.map((item) => Number(item.value));
  const total = allValues.reduce((acc, item) => (acc += item), 0);

  const income = allValues
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = allValues
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            -${expense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
