import React, { useEffect } from "react";
import "./Card.scss";
import "aos/dist/aos.css";
import Aos from "aos";

const Card = ({ theme, card, onSelectCard, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      onSelectCard(card);
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" alt="" src={card.src} />
        <img
          className="back"
          src={
            theme === "Star Wars"
              ? "/img/sw_back_card.png"
              : "/img/lotr_back_card.png"
          }
          alt=""
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
