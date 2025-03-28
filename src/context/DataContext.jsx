
import { createContext, useContext, useEffect, useRef, useState } from "react";

//Create the context
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
   const [showHero, setShowHero] = useState(false);
   const activeIdRef = useRef('');
   console.log("showHero",activeIdRef)

  const values = {
   showHero,
   setShowHero,
   activeIdRef

  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
