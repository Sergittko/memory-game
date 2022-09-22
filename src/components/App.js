import "./App.module.css";
import {useState} from 'react';
import {isMobile} from 'react-device-detect';
import GameContainer from "./Game/GameContainer";
import FruitsBackground from "./FruitsBackground/FruitsBackground";

function App() {
  let mousePosition = [];
  return (
    <section onMouseMove={(e)=> mousePosition = [e.clientX, e.clientY]}>
      <h1>Memory Game</h1>
      {isMobile? null :<FruitsBackground mousePosition={mousePosition}/>}
      <GameContainer/>
      <footer> <a href="https://github.com/Sergittko" target="_blank">Sergio Diorov - GitHub</a></footer>
    </section>
  );
}

export default App;
