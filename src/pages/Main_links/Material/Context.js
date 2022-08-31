import React, { useState, createContext } from "react";
import { Data } from "./Data";

export const Context = createContext();

export const MaterialContextProvider = (props) => {
  const [data, setData] = useState(Data);

  return <Context.Provider value={{ contextData: [data, setData] }}>{props.children}</Context.Provider>;
};
