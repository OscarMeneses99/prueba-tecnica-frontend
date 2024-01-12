import { createContext, useEffect, useState } from "react";
import { getCandidates } from "../services/api.js";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const candidates = await getCandidates();
      setCandidates(candidates);
    };
    fetchData();
  }, []);

  return (
    <Context.Provider
      value={{
        candidates,
        setCandidates,
      }}
    >
      {children}
    </Context.Provider>
  );
};
