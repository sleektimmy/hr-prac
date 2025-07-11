"use client"

import { createContext, useState } from "react";

// ✅ Define context once, outside the component
const SideContext = createContext();

const SideProviders = ({ children }) => {
  const [likes, setLikes] = useState(0);
  const [updates, setUpdates] = useState([])
  const [removed, setRemoved] = useState([...updates])

  return (
    <SideContext.Provider value={{ likes, setLikes, updates, setUpdates, removed, setRemoved }}>
      {children}
    </SideContext.Provider>
  );
};

export { SideProviders, SideContext };
