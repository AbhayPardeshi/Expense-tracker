import React, { useContext, useState } from "react";

const AppContext = React.createContext();
// console.log(AppContext);
const AppProvider = ({ children }) => {
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
