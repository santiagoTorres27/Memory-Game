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

  const [tries, setTries] = useState(0);

  return (
    <div>
      {/* <BoardHeader tries={tries} onSetTries={setTries} /> */}
      <Board
        theme={theme}
        difficulty={difficulty}
        setTries={setTries}
        tries={tries}
      />
    </div>
  );
};

export default Game;
