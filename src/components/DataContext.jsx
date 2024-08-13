import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState("text");

  const updateBgColor = (newBgColor) => {
    setBgColor(newBgColor);
  };

  return (
    <DataContext.Provider
      value={{
        bgColor,
        updateBgColor,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
