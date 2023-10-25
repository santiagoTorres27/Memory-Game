import React, { useEffect, useState } from "react";
import "./Board.scss";
import Card from "../card/Card";
import FinishedGameModal from "../finishedGameModal/FinishedGameModal";
import { cardImagesLotr, cardImagesSw } from "../../../data/Cards";

const Board = ({ theme, difficulty, onBackToHome }) => {
  const [timeOfGame] = useState(60);
  const [tries, setTries] = useState(0);
  const [boardStyle, setBoardStyle] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(timeOfGame);
  const [isTimeRunning, setIsTimeRunning] = useState(true);
  const [isVictory, setIsVictory] = useState(false);
  const [choices, setChoices] = useState({
    choice1: null,
    choice2: null,
  });
  const [cards, setCards] = useState(cardImagesSw);
  const initialCardsState = () =>
    theme === "Star Wars" ? cardImagesSw : cardImagesLotr;
  const [originalCards] = useState(initialCardsState);
  let intervalId;

  // Reset timer
  const resetTimer = () => {
    setIsTimeRunning(true);
    setTime(timeOfGame);
    setTries(0);
  };

  // Shuffle cards
  const shuffleCards = () => {
    let duplicatedCards = [];

    if (difficulty === "easy") {
      duplicatedCards = originalCards.slice(0, 8);
    } else if (difficulty === "medium") {
      duplicatedCards = originalCards.slice(0, 12);
    } else {
      duplicatedCards = originalCards.slice(0, 15);
    }

    const shuffledCards = [...duplicatedCards, ...duplicatedCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setIsTimeRunning(true);
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

  // Reset
  const reset = () => {
    disableCardSelection();
    setCards(null);
    resetTimer();
    shuffleCards();
    setIsVictory(false);
  };

  // Initial useEffect
  useEffect(() => {
    if (difficulty === "medium") {
      setBoardStyle("board--6x4");
      setCards((prev) => prev.slice(0, 12));
    } else if (difficulty == "hard") {
      setBoardStyle("board--6x5");
      setCards((prev) => prev.slice(0, 15));
    } else {
      setBoardStyle("board--4x4");
      setCards((prev) => prev.slice(0, 8));
    }

    shuffleCards();
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

  // check time
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

  // check win
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
      {!isTimeRunning && (
        <FinishedGameModal
          isVictory={isVictory}
          onReset={reset}
          tries={tries}
          time={time}
          theme={theme}
        />
      )}

      <div className="game-info">
        <div className="game-info__tries">{tries}</div>
        <div className="game-info__timer">{time}</div>
        <div className="game-info__reset-game">
          <div className="game-info__reset" onClick={reset}>
            <img src="/img/reset_icon.svg" alt="" />
          </div>
          <div className="game-info__back" onClick={onBackToHome}>
            <img src="/img/exit.svg" alt="" />
          </div>
        </div>
      </div>

      <div className={`board ${boardStyle}`}>
        {cards &&
          cards.map((card) => (
            <Card
              theme={theme}
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
