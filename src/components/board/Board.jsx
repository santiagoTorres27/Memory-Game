import React, { useContext, useEffect, useState } from "react";
import "./Board.scss";
import { GameContext } from "../../context/GameContext";

const Board = () => {
  const { difficulty } = useContext(GameContext);
  const [boardStyle, setBoardStyle] = useState("");

  useEffect(() => {
    console.log(difficulty);
    switch (difficulty) {
      case "easy":
        setBoardStyle("board--4x4");
        break;

      case "medium":
        setBoardStyle("board--6x4");
        break;

      case "hard":
        setBoardStyle("board--6x5");
        break;
    }
  }, [difficulty]);

  return (
    <div className={`board ${boardStyle}`}>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
      <div className="card">
        <img src="./public/img/lotr_back_card.svg" alt="" />
      </div>
    </div>
  );
};

export default Board;
