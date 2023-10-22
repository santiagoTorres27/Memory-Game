import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [isVictory, setIsVictory] = useState(false);

  return (
    <GameContext.Provider value={{ isVictory, setIsVictory }}>
      {children}
    </GameContext.Provider>
  );
};
