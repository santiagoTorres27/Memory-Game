import React, { useEffect, useState } from "react";
import "./Home.scss";
import GameModal from "../../components/gameModal/GameModal";
import DifficultyModal from "../../components/difficultyModal/DifficultyModal";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";

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

  useEffect(() => {
    Aos.init({});
  }, []);

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
        <h1
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
        >
          MEMORY GAME
        </h1>

        <img
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          data-aos-easing="ease"
          src={
            gameSelected === "The Lord of the Rings"
              ? "/img/lotr.svg"
              : "/img/sw.svg"
          }
          alt="Lord of the Rings"
        />

        <button
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
          data-aos-easing="ease"
          className="btn"
          onClick={openGameThemeModal}
        >
          <span>{gameSelected}</span>
          <span>Tap here to change game theme</span>
        </button>

        <button
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="500"
          data-aos-easing="ease"
          className="btn"
          onClick={openDifficultyModal}
        >
          <span>{difficultySelected}</span>
          <span>Tap here to change game theme</span>
        </button>

        <button
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
          data-aos-easing="ease"
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
