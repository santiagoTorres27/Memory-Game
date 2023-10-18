import React, { useContext } from "react";
import "./DifficultyModal.scss";
import Modal from "../modal/Modal";
import { GameContext } from "../../context/GameContext";

const DifficultyModal = ({ closeModal }) => {
  const { setDifficulty } = useContext(GameContext);

  return (
    <Modal onCloseModal={closeModal}>
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
    </Modal>
  );
};

export default DifficultyModal;
