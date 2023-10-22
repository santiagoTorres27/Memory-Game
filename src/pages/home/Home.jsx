import React, { useState } from "react";
import "./Home.scss";
import GameModal from "../../components/gameModal/GameModal";
import DifficultyModal from "../../components/difficultyModal/DifficultyModal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const [isDifficultyModalOpen, setIsDifficultyModalOpen] = useState(false);
  const [gameSelected, setGameSelected] = useState("The Lord of the Rings");
  const [difficultySelected, setDifficultySelected] = useState("easy");
  const navigate = useNavigate();

  const openGameThemeModal = () => {
    setIsGameModalOpen(!isGameModalOpen);
  };

  const openDifficultyModal = () => {
    setIsDifficultyModalOpen(!isDifficultyModalOpen);
  };

  const selectGameTheme = (option) => {
    console.log(option);
    setGameSelected(option);
  };

  const selectDifficulty = (option) => {
    console.log(option);
    setDifficultySelected(option);
  };

  const startGame = () => {
    navigate(`/game?theme=${gameSelected}&difficulty=${difficultySelected}`);
  };

  return (
    <div className="home">
      {/* Modal */}
      {isGameModalOpen && (
        <GameModal
          closeModal={openGameThemeModal}
          onSelectGameTheme={selectGameTheme}
        />
      )}

      {isDifficultyModalOpen && (
        <DifficultyModal
          closeModal={openDifficultyModal}
          onSelectDifficulty={selectDifficulty}
        />
      )}

      {/* Home layout */}
      <div className="home__container">
        <h1>MEMORY GAME</h1>

        <img
          src={
            gameSelected === "The Lord of the Rings"
              ? "/img/lotr.svg"
              : "/img/sw.svg"
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
            gameSelected === "The Lord of the Rings"
              ? "btn btn__primary btn__primary--lotr"
              : "btn btn__primary btn__primary--sw"
          }
          onClick={startGame}
        >
          Start game
        </button>
      </div>
    </div>
  );
};

export default Home;
