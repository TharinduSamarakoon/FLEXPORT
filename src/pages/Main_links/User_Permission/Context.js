import React, { useState, createContext } from "react";
import { Data } from "./Data";

export const Context = createContext();

export const PermissionContextProvider = (props) => {
  const [data, setData] = useState(Data);

  return <Context.Provider value={{ contextData: [data, setData] }}>{props.children}</Context.Provider>;
};
