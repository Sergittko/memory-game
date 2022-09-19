import style from "./FruitsBackground.module.css";
import fruit_1 from '../../img/fruits-background/fruit-1.png';
import fruit_2 from '../../img/fruits-background/fruit-2.png';
import fruit_3 from '../../img/fruits-background/fruit-3.png';
import fruit_4 from '../../img/fruits-background/fruit-4.png';
import fruit_5 from '../../img/fruits-background/fruit-5.png';
import fruit_6 from '../../img/fruits-background/fruit-6.png';
import fruit_7 from '../../img/fruits-background/fruit-7.png';

let FruitsBackground = props => {
  let moveImage = (value) => {
    let moveX = (props.mousePosition[1]*value)/550;
    let moveY = (props.mousePosition[0]*value)/550;
    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
    }
  }
  return (
    <div className={style.fruits_container}>
      <img src={fruit_1} alt="fruit_1" data-value='-6' style={moveImage(-6)}/>
      <img src={fruit_2} alt="fruit_2" data-value='2' style={moveImage(2)}/>
      <img src={fruit_3} alt="fruit_3" data-value='4' style={moveImage(4)}/>
      <img src={fruit_4} alt="fruit_4" data-value='-5' style={moveImage(-5)}/>
      <img src={fruit_5} alt="fruit_5" data-value='8' style={moveImage(8)}/>
      <img src={fruit_6} alt="fruit_6" data-value='-4' style={moveImage(-4)}/>
      <img src={fruit_7} alt="fruit_7" data-value='-9' style={moveImage(-9)}/>
    </div>
  );
}

export default FruitsBackground;
