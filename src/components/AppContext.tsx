import React, { createContext, useContext, useState } from "react";

interface SavedState {
  dc1: number;
  dc2: number;
  dc3: number;
  dc4: number;
  dc5: number;
  dc6: number;
}

interface AppContextProps {
  saved: SavedState;
  setSaved: React.Dispatch<React.SetStateAction<SavedState>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [saved, setSaved] = useState<SavedState>({
    dc1: 0,
    dc2: 0,
    dc3: 0,
    dc4: 0,
    dc5: 0,
    dc6: 0,
  });

  return (
    <AppContext.Provider value={{ saved, setSaved }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
