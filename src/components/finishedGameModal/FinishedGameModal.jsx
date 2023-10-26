import React, { useContext, useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { useNavigate } from "react-router-dom";
import "./FinishedGameModal.scss";
import "aos/dist/aos.css";
import Aos from "aos";

const FinishedGameModal = ({ isVictory, onReset, time, tries, theme }) => {
  const navigate = useNavigate();
  const [victoryImg, setVictoryImg] = useState(null);
  const [defeatImg, setDefeatImg] = useState(null);

  const handleReset = (e) => {
    e.preventDefault();
    onReset();
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (theme === "Star Wars") {
      setVictoryImg("/img/sw_victory.png");
      setDefeatImg("/img/sw_defeat.png");
    } else {
      setVictoryImg("/img/lotr_victory.png");
      setDefeatImg("/img/lotr_defeat.png");
    }

    Aos.init();
  }, []);

  return (
    <Modal disabledClick={true}>
      <div className="finished-game">
        {/* Victory modal */}
        {isVictory && (
          <>
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="200"
              className="finished-game__victory-img"
            >
              <img src={victoryImg} alt="Victory" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="200"
            >
              <p className="finished-game__title">Well done!</p>
              <p className="finished-game__message">
                You did it in {tries} attempts and {60 - time} seconds
              </p>
            </div>
          </>
        )}

        {/* Defeat modal */}
        {!isVictory && (
          <>
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="200"
              className="finished-game__victory-img"
            >
              <img src={defeatImg} alt="Victory" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="200"
            >
              <p className="finished-game__title">OH NO!</p>
              <p className="finished-game__message">Time is up</p>
            </div>
          </>
        )}

        <div
          data-aos="zoom-in"
          data-aos-duration="400"
          data-aos-delay="200"
          className="finished-game__buttons"
        >
          <button className="finished-game__btn" onClick={handleReset}>
            <img src="/img/reset_icon.svg" alt="" />
            New game
          </button>
          <button className="finished-game__btn" onClick={handleBackToHome}>
            <img src="/img/exit.svg" alt="" />
            Home
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default FinishedGameModal;
