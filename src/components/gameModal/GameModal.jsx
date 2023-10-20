import React, { useContext } from "react";
import Modal from "../modal/Modal";
import { GameContext } from "../../context/GameContext";
import "./GameModal.scss";

const GameModal = ({ closeModal, onSelectGameTheme }) => {
  return (
    <Modal onCloseModal={closeModal}>
      <span>Select the game theme</span>

      <div className="buttons">
        <button
          onClick={(e) => {
            onSelectGameTheme("The Lord of the Rings");
            closeModal();
          }}
        >
          <img src="./public/img/lotr_logo.svg" alt="" />
        </button>

        <button
          onClick={(e) => {
            onSelectGameTheme("Star Wars");
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
