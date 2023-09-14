import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {

  const [ contextData, setContextData ] = useState('Killjoy');
  const valor = { contextData, setContextData };

  return (
    <DataContext.Provider value={valor}>
        {props.children}
    </DataContext.Provider>
  );
}
