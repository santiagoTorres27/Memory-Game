import React from "react";
import "./Card.scss";

const Card = ({ card, onSelectCard, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      onSelectCard(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" alt="" src={card.src} />
        <img
          className="back"
          src="/img/lotr_back_card.png"
          alt=""
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
