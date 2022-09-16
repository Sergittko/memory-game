import React from 'react';
import style from './Game.module.css'

let GameContainer = props => {
  console.log(props.cards);
  return (
    <div>
      <p className={style.madeMoves}>Made 8 moves in the game</p>
      <div className={style.gameContainer}>
        {props.cards.map((el,key) => {
          return (
            <div className={style.cardContainer} key={el.imgPath + '_' + key}>
              <img src={el.imgPath} alt={el.imgPath}/>
            </div>
          )
        })}
      </div>
      <button className={style.resetButton}>Reset Game</button>
    </div>
  );
}

export default GameContainer;
