import React, { useState, useEffect } from "react";
import style from "./Game.module.css";
import Card from "./Card/Card";

let Game = React.memo((props) => {
  let [movesMade, setMovesCount] = useState(0);
  let [openCards, addOpenCards] = useState([]);
  let [cardsIdentic, setCardsIdentic] = useState([]);

  const flipCard = (index) => {
    if (openCards[0] === index) return;
    if (openCards.length >= 2) return;
    addOpenCards([...openCards, index]);
  };

  useEffect(() => {
    if (openCards.length < 2) return;
    if (openCards.length > 2) return;
    setMovesCount(++movesMade);
    const firstCard = props.cards[openCards[0]].id;
    const secondCard = props.cards[openCards[1]].id;
    if (firstCard === secondCard && openCards[0] !== openCards[1]) {
      setCardsIdentic([...cardsIdentic, firstCard, secondCard]);
    }
    if (openCards.length === 2) setTimeout(() => addOpenCards([]), 500);
  }, [openCards]);

  let restartGame = () => {
    props.mixCards();
    setMovesCount(0);
    addOpenCards([]);
    setCardsIdentic([]);
  }
  return (
    <div>
      <p className={style.madeMoves}>Made {movesMade} moves in the game</p>
      <div className={style.gameContainer}>
        {props.cards.map((el, index) => {
          let cardFlipped = false;
          if (openCards.includes(index)) cardFlipped = true;
          if (cardsIdentic.includes(el.id)) cardFlipped = true;
          return (
            <div
              className={`${style.card} ${cardFlipped ? style.flipped : ""}`}
              key={el.imgPath + "_" + index}>
              <Card imgPath={el.imgPath} changeMoves={() => flipCard(index)} />
            </div>
          );
        })}
      </div>
      <button onClick={()=> restartGame()} className={style.resetButton}>Reset Game</button>
    </div>
  );
});

export default Game;
