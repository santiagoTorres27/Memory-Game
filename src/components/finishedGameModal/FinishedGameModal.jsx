import React, { useContext } from "react";
import Modal from "../modal/Modal";
import { useNavigate } from "react-router-dom";

const FinishedGameModal = ({ isVictory, onReset, time, tries }) => {
  const navigate = useNavigate();

  const handleReset = () => {
    onReset();
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Modal disabledClick={true}>
      {isVictory && (
        <>
          <h1>Genial!!</h1>
          <p>Lo has conseguido en {60 - time} segundos</p>
          <p>En {tries} intentos</p>
        </>
      )}
      {!isVictory && <h1>Tiempo agotado :(</h1>}
      <button onClick={handleReset}>New game</button>
      <button onClick={handleBackToHome}>Back to home</button>
    </Modal>
  );
};

export default FinishedGameModal;
