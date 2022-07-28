import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(list));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [list, setList] = useState(getLocalStorage());
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

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <AppContext.Provider
      value={{
        list,
        setList,
        name,
        setName,
        amount,
        setAmount,
        removeItem,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Custom Hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
