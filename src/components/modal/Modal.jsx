import React, { useEffect } from "react";
import "./Modal.scss";
import "aos/dist/aos.css";
import Aos from "aos";

const Modal = ({ children, onCloseModal, disabledClick }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="modal__background"
      onClick={(e) => {
        if (!disabledClick) {
          if (e.target.classList.value === "modal__background") {
            onCloseModal();
          }
        }
      }}
    >
      <div data-aos="zoom-in" className="modal__container">
        {children}
      </div>
    </div>
  );
};

export default Modal;
