import React, { useEffect } from "react";
import Modal from "../modal/Modal";
import "./GameModal.scss";
import "aos/dist/aos.css";
import Aos from "aos";

const GameModal = ({ closeModal, onSelectGameTheme }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Modal onCloseModal={closeModal}>
      <span data-aos="zoom-in" data-aos-delay="100">
        Select the game theme
      </span>

      <div className="buttons" data-aos="zoom-in" data-aos-delay="150">
        <button
          onClick={(e) => {
            onSelectGameTheme("The Lord of the Rings");
            closeModal();
          }}
        >
          <img src="/img/lotr_logo.svg" alt="" />
        </button>

        <button
          onClick={(e) => {
            onSelectGameTheme("Star Wars");
            closeModal();
          }}
        >
          <img src="/img/sw_logo.svg" alt="" />
        </button>
      </div>
    </Modal>
  );
};

export default GameModal;
