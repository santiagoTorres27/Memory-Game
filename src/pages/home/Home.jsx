import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import GameModal from "../../components/gameModal/GameModal";
import DifficultyModal from "../../components/difficultyModal/DifficultyModal";
import { GameContext } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const [isDifficultyModalOpen, setIsDifficultyModalOpen] = useState(false);
  const [gameSelected, setGameSelected] = useState("");
  const [difficultySelected, setDifficultySelected] = useState("");
  const navigate = useNavigate();

  const { gameTheme, setGameTheme, difficulty, setDifficulty } =
    useContext(GameContext);

  useEffect(() => {
    switch (gameTheme) {
      case "lotr":
        setGameSelected("The lord of the rings");
        break;
      case "sw":
        setGameSelected("Star wars");
        break;
    }

    switch (difficulty) {
      case "easy":
        setDifficultySelected("Easy");
        break;
      case "medium":
        setDifficultySelected("Medium");
        break;
      case "hard":
        setDifficultySelected("Hard");
        break;
    }
  }, [gameTheme, difficulty]);

  const openGameThemeModal = () => {
    setIsGameModalOpen(!isGameModalOpen);
  };

  const openDifficultyModal = () => {
    setIsDifficultyModalOpen(!isDifficultyModalOpen);
  };

  return (
    <div className="home">
      {/* Modal */}
      {isGameModalOpen && <GameModal closeModal={openGameThemeModal} />}

      {isDifficultyModalOpen && (
        <DifficultyModal closeModal={openDifficultyModal} />
      )}

      {/* Home layout */}
      <div className="home__container">
        <h1>MEMORY GAME</h1>

        <img
          src={
            gameTheme === "lotr"
              ? "./public/img/lotr.svg"
              : "./public/img/sw.svg"
          }
          alt="Lord of the Rings"
        />

        <button className="btn" onClick={openGameThemeModal}>
          <span>{gameSelected}</span>
          <span>Tap here to change game theme</span>
        </button>

        <button className="btn" onClick={openDifficultyModal}>
          <span>{difficultySelected}</span>
          <span>Tap here to change game theme</span>
        </button>

        <button
          className={
            gameTheme === "lotr"
              ? "btn btn__primary btn__primary--lotr"
              : "btn btn__primary btn__primary--sw"
          }
          onClick={(e) => {
            navigate("/game");
          }}
        >
          Start game
        </button>
      </div>
    </div>
  );
};

export default Home;
