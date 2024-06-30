import React from 'react'
import Row from './Row'

export default function Grid({ guesses, currentGuess, turn, letterCount }) {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} letterCount={letterCount} />
        }
        return <Row key={i} guess={g} letterCount={letterCount} /> 
      })}
    </div>
  )
}