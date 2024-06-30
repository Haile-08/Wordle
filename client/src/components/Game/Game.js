import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import IntroModal from './components/IntroModal';

function Game() {
  const [solution, setSolution] = useState(null);
  const [modal, setModal] = useState(false);
  const [setting, setSetting] = useState({
    letterCount: '',
    letterRepeat: false,
    startTime: '',
  });
  
  useEffect(()=> {
    setModal(true);
  }, []);

  return (
    <div className="Game">
      {solution && <Wordle solution={solution} setting={setting}/>}
      {modal && <IntroModal setSolution={setSolution} setSetting={setSetting} setting={setting} setModal={setModal}/>}
    </div>
  )
}
export default Game