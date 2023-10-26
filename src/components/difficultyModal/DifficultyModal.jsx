import React, { useEffect } from "react";
import Modal from "../modal/Modal";
import "./DifficultyModal.scss";
import "aos/dist/aos.css";
import Aos from "aos";

const DifficultyModal = ({ closeModal, onSelectDifficulty }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Modal onCloseModal={closeModal}>
      <span data-aos="zoom-in" data-aos-delay="100">
        Select the game theme
      </span>

      <div
        className="buttons-difficulty"
        data-aos="zoom-in"
        data-aos-delay="150"
      >
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
