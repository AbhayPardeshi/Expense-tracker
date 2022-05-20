import React, { useState, useEffect } from "react";
import Heading from "./Heading";

const NewTransaction = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date().getTime().toString(),
      title: name,
      value: amount,
    };
    setList([...list, newItem]);
    setName("");
    setAmount("");
  };

  const removeItem = (id) => {
    setList(list.filter((listItem) => listItem.id !== id));
  };

  return (
    <div>
      <Heading list={list} />
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

      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default NewTransaction;
