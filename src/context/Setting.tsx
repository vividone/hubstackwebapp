"use client"; 
import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from "react";


interface SettingsContextType {
  themeColor: string;  
  updateTheme: (newTheme: string) => void;
}

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);


export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [themeColor, setThemeColor] = useState<string>("#3D3066");

  const updateTheme = useCallback((newTheme: string) => {
    setThemeColor(newTheme);
  }, []);

  const value = useMemo(
    () => ({
      themeColor,
      updateTheme,
    }),
    [themeColor, updateTheme]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom hook to use the context
export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettingsContext must be used within a SettingsProvider");
  }
  return context;
};