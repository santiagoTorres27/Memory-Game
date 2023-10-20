import React, { useEffect, useState } from "react";
import "./BoardHeader.scss";

const BoardHeader = () => {
  const [time, setTime] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(true);
  let intervalId;

  useEffect(() => {
    if (isTimeRunning) {
      intervalId = setInterval(() => setTime(time - 1), 1000);
      console.log("Working");
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
    setTime(10);
  };

  return (
    <div className="game-info">
      <div className="game-info__tries">0</div>
      <div className="game-info__timer">{time}</div>
      <div className="game-info__reset" onClick={resetGame}>
        <img src="./public/img/reset_icon.svg" alt="" />
      </div>
    </div>
  );
};

export default BoardHeader;
