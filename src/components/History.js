import React from "react";
import { useGlobalContext } from "./Context";

const History = () => {
  const { list, removeItem } = useGlobalContext();

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {list.map((item) => {
          const { id, title, value } = item;
          return (
            <li key={id} className={value > 0 ? "plus" : "minus"}>
              {title}
              <span>
                {value > 0 ? "+" : "-"}${Math.abs(value)}
              </span>
              <button className="delete-btn" onClick={() => removeItem(id)}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
