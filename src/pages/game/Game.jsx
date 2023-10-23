import React, { useEffect, useState } from "react";
import "./Game.scss";
import Board from "../../components/board/Board";
import { useLocation, useNavigate } from "react-router-dom";
import BoardHeader from "../../components/boardHeader/BoardHeader";

const Game = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const theme = queryParams.get("theme");
  const difficulty = queryParams.get("difficulty");

  const navigate = useNavigate("");
  const backToHome = () => {
    navigate("/");
  };

  return (
    <div className="game">
      {/* <BoardHeader tries={tries} onSetTries={setTries} /> */}
      <Board theme={theme} difficulty={difficulty} onBackToHome={backToHome} />
    </div>
  );
};

export default Game;
