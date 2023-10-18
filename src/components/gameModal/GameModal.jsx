import React, { useContext } from "react";
import Modal from "../modal/Modal";
import { GameContext } from "../../context/GameContext";

const GameModal = ({ closeModal }) => {
  const { setGameTheme } = useContext(GameContext);

  return (
    <Modal onCloseModal={closeModal}>
      <span>Select the game theme</span>

      <button
        onClick={(e) => {
          setGameTheme("lotr");
          closeModal();
        }}
      >
        The Lord of the Rings
      </button>
      <button
        onClick={(e) => {
          setGameTheme("sw");
          closeModal();
        }}
      >
        Star Wars
      </button>
    </Modal>
  );
};

export default GameModal;
