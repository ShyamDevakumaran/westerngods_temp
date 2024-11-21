import React, { useState, createContext } from "react";

export const SideMenuContext = createContext();

const SideMenubarProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <SideMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, handleClose }}>
      {children}
    </SideMenuContext.Provider>
  );
};

export default SideMenubarProvider;