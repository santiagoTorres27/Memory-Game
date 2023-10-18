import React from "react";
import "./Modal.scss";

const Modal = ({ children, onCloseModal }) => {
  return (
    <div
      className="modal__background"
      onClick={(e) => {
        if (e.target.classList.value === "modal__background") {
          onCloseModal();
        }
      }}
    >
      <div className="modal__container">{children}</div>
    </div>
  );
};

export default Modal;
