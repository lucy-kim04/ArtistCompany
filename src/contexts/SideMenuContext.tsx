'use client';

import React, { createContext, useContext, useState } from 'react';

interface SideMenuContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideMenuContext = createContext<SideMenuContextType | undefined>(
  undefined
);

export function SideMenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideMenuContext.Provider>
  );
}

export function useSideMenu() {
  const context = useContext(SideMenuContext);
  if (context === undefined) {
    throw new Error('useSideMenu must be used within a SideMenuProvider');
  }
  return context;
}
