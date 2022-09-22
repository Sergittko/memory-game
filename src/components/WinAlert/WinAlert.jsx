import React from "react";
import style from "./WinAlert.module.css";

let WinAlert = () => {
  return (
    <div className={style.alertContainer}>
      <p>You win!!!</p>
      <div className={style.confettiContainer}>
      </div>
    </div>
  );
};

export default WinAlert;
