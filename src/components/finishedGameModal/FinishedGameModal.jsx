import React, { useContext } from "react";
import Modal from "../modal/Modal";
import { GameContext } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";

const FinishedGameModal = ({ isVictory, onReset }) => {
  const navigate = useNavigate();

  const handleReset = () => {
    onReset();
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Modal disabledClick={true}>
      {isVictory && <h1>Victoria!!!</h1>}
      {!isVictory && <h1>Tiempo agotado :(</h1>}
      <button onClick={handleReset}>New game</button>
      <button onClick={handleBackToHome}>Back to home</button>
    </Modal>
  );
};

export default FinishedGameModal;
