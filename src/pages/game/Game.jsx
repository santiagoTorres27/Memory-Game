import React, { useEffect } from "react";
import "./Game.scss";
import Board from "../../components/board/Board";
import { useLocation, useNavigate } from "react-router-dom";
import BoardHeader from "../../components/boardHeader/BoardHeader";

const Game = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const theme = queryParams.get("theme");
  const difficulty = queryParams.get("difficulty");

  useEffect(() => {
    /* console.log(theme, difficulty); */
  }, []);

  return (
    <div>
      <BoardHeader />
      <Board theme={theme} difficulty={difficulty} />
    </div>
  );
};

export default Game;
