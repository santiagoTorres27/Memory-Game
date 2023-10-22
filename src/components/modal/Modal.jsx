import React from "react";
import "./Modal.scss";

const Modal = ({ children, onCloseModal, disabledClick }) => {
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
      <div className="modal__container">{children}</div>
    </div>
  );
};

export default Modal;
