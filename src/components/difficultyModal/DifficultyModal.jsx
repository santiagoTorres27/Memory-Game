import React from "react";
import Modal from "../modal/Modal";
import "./DifficultyModal.scss";

const DifficultyModal = ({ closeModal, onSelectDifficulty }) => {
  return (
    <Modal onCloseModal={closeModal}>
      <span>Select the game theme</span>

      <div className="buttons-difficulty">
        <button
          onClick={(e) => {
            onSelectDifficulty("easy");
            closeModal();
          }}
        >
          Easy
        </button>
        <button
          onClick={(e) => {
            onSelectDifficulty("medium");
            closeModal();
          }}
        >
          Medium
        </button>
        <button
          onClick={(e) => {
            onSelectDifficulty("hard");
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
