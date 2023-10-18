import React, { useContext } from "react";
import Modal from "../modal/Modal";
import { GameContext } from "../../context/GameContext";
import "./DifficultyModal.scss";

const DifficultyModal = ({ closeModal }) => {
  const { setDifficulty } = useContext(GameContext);

  return (
    <Modal onCloseModal={closeModal}>
      <span>Select the game theme</span>

      <div className="buttons-difficulty">
        <button
          onClick={(e) => {
            setDifficulty("easy");
            closeModal();
          }}
        >
          Easy
        </button>
        <button
          onClick={(e) => {
            setDifficulty("medium");
            closeModal();
          }}
        >
          Medium
        </button>
        <button
          onClick={(e) => {
            setDifficulty("hard");
            closeModal();
          }}
        >
          Hard
        </button>
      </div>
    </Modal>
  );
};

export default DifficultyModal;
