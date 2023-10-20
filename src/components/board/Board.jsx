import React, { useContext, useEffect, useState } from "react";
import "./Board.scss";
import { GameContext } from "../../context/GameContext";
import { cardImages4x4 } from "../../../data/Cards";
import Card from "../card/Card";

const Board = ({ theme, difficulty }) => {
  /*   const { difficulty } = useContext(GameContext); */
  const [boardStyle, setBoardStyle] = useState("");
  const [cards, setCards] = useState(cardImages4x4);
  const [disabled, setDisabled] = useState(null);
  const [tries, setTries] = useState(0);
  const [choices, setChoices] = useState({
    choice1: null,
    choice2: null,
  });

  useEffect(() => {
    switch (difficulty) {
      case "medium":
        setBoardStyle("board--6x4");
        break;

      case "hard":
        setBoardStyle("board--6x5");
        break;

      default:
        setBoardStyle("board--4x4");
        break;
    }

    switch (theme) {
      case "sw":
        setCards();
    }
  }, [difficulty]);

  useEffect(() => {
    shuffleCards();
  }, []);

  // Suffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages4x4, ...cardImages4x4]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    reset();
    setCards(shuffledCards);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choices.choice1 && choices.choice2) {
      setDisabled(true);
      if (choices.choice1.src === choices.choice2.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choices.choice1.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
        setTimeout(() => reset(), 1000);
      }
    }
    setTries(tries + 1);
  }, [choices]);

  const reset = () => {
    setChoices((prev) => ({
      ...prev,
      choice1: null,
      choice2: null,
    }));
    setDisabled(false);
  };

  const selectCard = (card) => {
    if (choices.choice1) {
      setChoices((prev) => ({
        ...prev,
        choice2: card,
      }));
    } else {
      setChoices((prev) => ({
        ...prev,
        choice1: card,
      }));
    }
  };

  return (
    <div className={`board ${boardStyle}`}>
      {cards &&
        cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onSelectCard={selectCard}
            flipped={
              card === choices.choice1 ||
              card === choices.choice2 ||
              card.matched
            }
            disabled={disabled}
          />
        ))}
    </div>
  );
};

export default Board;
