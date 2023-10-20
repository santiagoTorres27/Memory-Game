import React, { useEffect, useState } from "react";
import "./BoardHeader.scss";

const BoardHeader = ({ tries, onSetTries }) => {
  const [time, setTime] = useState(60);
  const [isTimeRunning, setIsTimeRunning] = useState(true);
  let intervalId;

  useEffect(() => {
    if (isTimeRunning) {
      intervalId = setInterval(() => setTime(time - 1), 1000);
      checkFinishTime();
    }
    return () => clearInterval(intervalId);
  }, [time, isTimeRunning]);

  const checkFinishTime = () => {
    if (time === 0) {
      alert("Se ha acabado el tiempo");
      stopGame();
    }
  };

  const stopGame = () => {
    setIsTimeRunning(false);
    clearInterval(intervalId);
  };

  const resetGame = () => {
    setIsTimeRunning(true);
    setTime(60);
    onSetTries(0);
  };

  return (
    <div className="game-info">
      <div className="game-info__tries">{tries}</div>
      <div className="game-info__timer">{time}</div>
      <div className="game-info__reset" onClick={resetGame}>
        <img src="./public/img/reset_icon.svg" alt="" />
      </div>
    </div>
  );
};

export default BoardHeader;
