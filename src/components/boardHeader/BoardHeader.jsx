import React, { useContext, useEffect, useState } from "react";
import "./BoardHeader.scss";
import { GameContext } from "../../context/GameContext";
import FinishedGameModal from "../finishedGameModal/FinishedGameModal";

const BoardHeader = ({ tries, onSetTries }) => {
  const [time, setTime] = useState(60);
  const [isTimeRunning, setIsTimeRunning] = useState(true);
  const { isVictory } = useContext(GameContext);
  let intervalId;

  useEffect(() => {
    if (isTimeRunning) {
      intervalId = setInterval(() => setTime(time - 1), 1000);
      checkFinishTime();
    }
    return () => clearInterval(intervalId);
  }, [time, isTimeRunning]);

  useEffect(() => {
    console.log("Probando: " + isVictory);
    if (isVictory) {
      clearInterval(intervalId);
    }
  }, [isVictory]);

  const checkFinishTime = () => {
    if (time === 0) {
      stopGame();
    }
  };

  const stopGame = () => {
    setIsTimeRunning(false);
    clearInterval(intervalId);
  };

  const resetGame = () => {
    console.log("holaaaaaaa");
    setIsTimeRunning(true);
    setTime(60);
    onSetTries(0);
  };

  return (
    <div className="game-info">
      {!isTimeRunning && <FinishedGameModal />}
      <div className="game-info__tries">{tries}</div>
      <div className="game-info__timer">{time}</div>
      <div className="game-info__reset" onClick={resetGame}>
        <img src="/img/reset_icon.svg" alt="" />
      </div>
    </div>
  );
};

export default BoardHeader;
