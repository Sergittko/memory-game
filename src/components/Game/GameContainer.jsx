import React, {useState, useEffect} from 'react';
import fruits from '../../cardsData/fuitCardsData';
console.clear();

let GameContainer = () => {
  const [mixedCards, setMixedCards] = useState([]);

  let setOfCards = [...fruits,...fruits];
  let mixCards = cards => {
    let currentLength = cards.length;

    while (currentLength > 0) {
      let randomElement = Math.floor(Math.random() * currentLength)
      --currentLength;

      let currentValue = cards[currentLength];
      cards[currentLength] = cards[randomElement];
      cards[randomElement] = currentValue;
    }
    return cards;
  };

  useEffect(()=>setMixedCards(mixCards(setOfCards)),[]);

  return (
    <div>
      <main>GAME</main>
    </div>
  );
}

export default GameContainer;
