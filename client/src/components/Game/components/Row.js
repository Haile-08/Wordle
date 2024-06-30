import React from 'react'

export default function Row({ guess, currentGuess, letterCount }) {
    if (currentGuess) {
        let letters = currentGuess.split('')
    
        return (
          <div className="row current">
            {letters.map((letter, i) => (
              <div key={i} className="filled">{letter}</div>
            ))}
            {[...Array(letterCount - letters.length)].map((_,i) => (
              <div key={i}></div>
            ))}
          </div>
        )
    }

    if (guess) {
      return (
        <div className="row past">
          {guess.map((l, i) => (
            <div key={i} className={l.color}>{l.key}</div>
          ))}
        </div>
      )
    }
  
    return (
      <div className="row">
        {[...Array(letterCount)].map((_, index) => {
          return <div key={index + letterCount}></div>
        })}
      </div>
    )
    
  }