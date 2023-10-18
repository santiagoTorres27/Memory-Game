import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameThemeProvider = ({ children }) => {
  const [gameTheme, setGameTheme] = useState("lotr");
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <GameContext.Provider
      value={{ gameTheme, setGameTheme, difficulty, setDifficulty }}
    >
      {children}
    </GameContext.Provider>
  );
};
