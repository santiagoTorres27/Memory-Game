import React, { useContext } from "react";
import Modal from "../modal/Modal";
import { GameContext } from "../../context/GameContext";
import "./GameModal.scss";

const GameModal = ({ closeModal }) => {
  const { setGameTheme } = useContext(GameContext);

  return (
    <Modal onCloseModal={closeModal}>
      <span>Select the game theme</span>

      <div className="buttons">
        <button
          onClick={(e) => {
            setGameTheme("lotr");
            closeModal();
          }}
        >
          <img src="./public/img/lotr_logo.svg" alt="" />
        </button>

        <button
          onClick={(e) => {
            setGameTheme("sw");
            closeModal();
          }}
        >
          <img src="./public/img/sw_logo.svg" alt="" />
        </button>
      </div>
    </Modal>
  );
};

export default GameModal;
