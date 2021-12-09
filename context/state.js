import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children, sorting }) => {

  const [currentSorting, setCurrrentSorting] = useState(sorting || "desc");

  const saveSorting = (values) => {
    setCurrrentSorting(values)
  };

  return (
    <AppContext.Provider value={{ sorting: currentSorting, saveSorting }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
}

export default AppContext
