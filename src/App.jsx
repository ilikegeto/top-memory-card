import { useState } from 'react';
import './style/App.css';
import * as Header from './components/header';
import { Cardsgrid } from './components/cardgrid';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0); 

  const handleScore = (isAlreadyClicked) => {
    if (isAlreadyClicked) {
      setScore(0);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }
  };

  return (
    <div className='container'>
      <Header.header score={score} bestScore={bestScore} />
      <Cardsgrid onCardClick={handleScore} />
    </div>
  );
}

export default App;