import React, { useState, useEffect } from 'react'
import useWordle from '../../../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import keys from '../../../constants/keys'
import Modal from './Modal'

export default function Wordle({ solution, setting }) {
  const [showModal, setShowModal] = useState(false)
  const { setLetterCount, currentGuess, guesses, score, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution)

  useEffect(() => {
    setLetterCount(parseInt(setting.letterCount));
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} letterCount={parseInt(setting.letterCount)}/>
      <Keypad keys={keys} usedKeys={usedKeys}/>
      {showModal && <Modal isCorrect={isCorrect} guesses={guesses} setting={setting} score={score} turn={turn} solution={solution} />}
    </div>
  )
}