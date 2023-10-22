import React, { useEffect, useState } from "react";
import "./Board.scss";
import { cardImages } from "../../../data/Cards";
import Card from "../card/Card";
import FinishedGameModal from "../finishedGameModal/FinishedGameModal";

const Board = ({ difficulty, setTries, tries }) => {
  const [timeOfGame] = useState(60);
  const [boardStyle, setBoardStyle] = useState("");
  const [cards, setCards] = useState(cardImages);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(timeOfGame);
  const [isTimeRunning, setIsTimeRunning] = useState(true);
  const [isVictory, setIsVictory] = useState(false);
  const [choices, setChoices] = useState({
    choice1: null,
    choice2: null,
  });
  let intervalId;
  let numberOfCards = 0;
  let myCards = [];

  const resetTimer = () => {
    setIsTimeRunning(true);
    setTime(timeOfGame);
    setTries(0);
  };

  const getDifficulty = () => {
    if (difficulty === "medium") {
      setBoardStyle("board--6x4");
      numberOfCards = 12;
    } else if (difficulty == "hard") {
      setBoardStyle("board--6x5");
      numberOfCards = 15;
    } else {
      setBoardStyle("board--4x4");
      numberOfCards = 8;
    }
  };

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

    /*     reset(); */
    setCards(shuffledCards);
  };

  const disableCardSelection = () => {
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

  const reset = () => {
    disableCardSelection();
    getDifficulty();
    resetTimer();
    shuffleCards();
    setIsVictory(false);
  };

  useEffect(() => {
    shuffleCards();
    getDifficulty();
  }, [difficulty]);

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
        disableCardSelection();
      } else {
        setTimeout(() => disableCardSelection(), 1000);
      }
      setTries((prev) => prev + 1);
    }
  }, [choices]);

  useEffect(() => {
    if (isTimeRunning) {
      intervalId = setInterval(() => setTime(time - 1), 1000);
      if (time === 0) {
        setIsTimeRunning(false);
        clearInterval(intervalId);
      }
    }
    return () => clearInterval(intervalId);
  }, [time, isTimeRunning]);

  // compare win
  useEffect(() => {
    const result = cards.every((item) => item.matched === true);
    if (result === true) {
      setIsVictory(true);
      clearInterval(intervalId);
      setIsTimeRunning(false);
    }
  }, [cards]);

  return (
    <div>
      <div className="game-info">
        {!isTimeRunning && (
          <FinishedGameModal isVictory={isVictory} onReset={reset} />
        )}

        <div className="game-info__tries">{tries}</div>
        <div className="game-info__timer">{time}</div>
        <div className="game-info__reset" onClick={reset}>
          <img src="/img/reset_icon.svg" alt="" />
        </div>
      </div>

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
    </div>
  );
};

export default Board;
