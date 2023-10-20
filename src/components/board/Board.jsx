import React, { useEffect, useState } from "react";
import "./Board.scss";
import { cardImages } from "../../../data/Cards";
import Card from "../card/Card";

const Board = ({ theme, difficulty, setTries, tries }) => {
  const [boardStyle, setBoardStyle] = useState("");
  const [cards, setCards] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [choices, setChoices] = useState({
    choice1: null,
    choice2: null,
  });
  let numberOfCards = 0;
  let myCards = [];

  const getDifficulty = () => {
    switch (difficulty) {
      case "medium":
        setBoardStyle("board--6x4");
        numberOfCards = 12;
        break;

      case "hard":
        setBoardStyle("board--6x5");
        numberOfCards = 15;
        break;

      default:
        setBoardStyle("board--4x4");
        numberOfCards = 8;
        break;
    }

    switch (theme) {
      case "sw":
        setCards();
    }
  };

  useEffect(() => {
    getDifficulty();
  }, [difficulty]);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (tries === 0) {
      shuffleCards();
    }
  }, [tries]);

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
        reset();
      } else {
        setTimeout(() => reset(), 1000);
      }
      setTries((prev) => prev + 1);
    }
  }, [choices]);

  // Suffle cards
  const shuffleCards = () => {
    getDifficulty();

    if (numberOfCards === 8) {
      myCards = cardImages.slice(0, 8);
    } else if (numberOfCards === 12) {
      myCards = cardImages.slice(0, 12);
    } else if (numberOfCards === 15) {
      myCards = cardImages.slice(0, 15);
    }

    const shuffledCards = [...myCards, ...myCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    reset();
    setCards(shuffledCards);
  };

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
