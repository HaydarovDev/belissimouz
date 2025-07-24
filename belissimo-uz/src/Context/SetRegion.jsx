import React, { createContext, useContext, useEffect, useState } from "react";

const Region = createContext();

const SetRegion = ({ children }) => {
  const [region, setRegion] = useState(() => {
    return localStorage.getItem("region") || "Toshkent";
  });

  useEffect(() => {
    if (region) {
      localStorage.setItem("region", region);
    }
  }, [region]);

  return (
    <Region.Provider value={{ region, setRegion }}>{children}</Region.Provider>
  );
};

export default SetRegion;
export const useRegion = () => useContext(Region);
