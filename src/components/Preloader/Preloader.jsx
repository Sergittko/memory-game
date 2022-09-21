import React from "react";
import style from "./Preloader.module.css";
import loader from "../../img/loader.gif";

let Preloader = () => {
  return (
    <div className={style.preloaderContainer}>
      <img src={loader} alt=""/>
    </div>
  );
};

export default Preloader;
