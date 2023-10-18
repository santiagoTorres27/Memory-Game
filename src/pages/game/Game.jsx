import React from "react";
import "./Game.scss";
import Board from "../../components/board/Board";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="game-info">
        <div className="game-info__tries">0</div>
        <div className="game-info__timer">60</div>
        <div className="game-info__reset" onClick={(e) => navigate("/")}>
          <img src="./public/img/reset_icon.svg" alt="" />
        </div>
      </div>
      <Board />
    </div>
  );
};

export default Game;
