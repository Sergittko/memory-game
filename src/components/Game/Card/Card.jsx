import React from "react";
import style from "./Card.module.css";
import questionMark from "../../../img/questionMark.png";

let Card = props => {
  return (
    <div
      className={style.cardContainer}
      onClick={props.changeMoves}>
      <div className={style.front}>
        <img src={props.imgPath} alt={props.imgPath} />
      </div>
      <div className={style.back}>
        <img src={questionMark} alt={props.imgPath} />
      </div>
    </div>
  );
};

export default Card;
