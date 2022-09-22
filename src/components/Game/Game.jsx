import React, { useState, useEffect } from "react";
import style from "./Game.module.css";
import Card from "./Card/Card";
import Preloader from "../Preloader/Preloader";
import WinAlert from "../WinAlert/WinAlert";
import hand_pointer from '../../img/hand-pointerr2.png';

let Game = React.memo((props) => {
  let [movesMade, setMovesCount] = useState(0);
  let [openCards, addOpenCards] = useState([]);
  let [cardsIdentic, setCardsIdentic] = useState([]);
  let [loading, isLoaded] = useState(false);
  let [userActive, setUserActive] = useState('unactive');

  // setTimeout(()=>{
  //   if (userActive === 'unactive') {
  //     setUserActive(false)
  //   }
  // },4000);


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
    isLoaded(true);
    props.mixCards();
    setMovesCount(0);
    addOpenCards([]);
    setCardsIdentic([]);
    setUserActive('unactive');
    setTimeout(()=>isLoaded(false),2000);
  }
  return (
    <div>
      <p className={style.madeMoves}>Made {movesMade} moves in the game</p>
      <div className={style.gameContainer}>
        { loading? <Preloader/> : null}
        { cardsIdentic.length === props.cards.length && movesMade > 0?
        <WinAlert/> : null}

        {props.cards.map((el, index) => {
          let cardFlipped = false;
          if (openCards.includes(index)) cardFlipped = true;
          if (cardsIdentic.includes(el.id)) cardFlipped = true;
          return (
            <div
              className={`${style.card} ${cardFlipped ? style.flipped : ""}`}
              key={el.imgPath + "_" + index}
              onClick={()=>setUserActive(true)}>
              <Card imgPath={el.imgPath} changeMoves={() => flipCard(index)} />
            </div>
          );
        })}

        { userActive === false?
          <img className={style.handPointer} src={hand_pointer} alt="handPointer"/> : null
        }
      </div>
      <button onClick={()=> restartGame()} className={style.resetButton}>Reset Game</button>
    </div>
  );
});

export default Game;
