import React, { useState } from 'react';
import axios from 'axios';

export default function Modal({ isCorrect, guesses, setting, score, solution, turn }) {
  const [ formData, setFormData ] = useState({
    Name: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentStartTime = new Date().toISOString();
    const data = {
      Name: formData.Name,
      startTime: setting.startTime,
      endTime: currentStartTime, 
      guesses: guesses,
      score,
      letterCount: parseInt(setting.letterCount), 
      letterRepeat:`${setting.letterRepeat}`
    };
    console.log('data');
    console.log(data);
    axios.post('http://localhost:5080/v1/score', data).then(function () {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Congrats, You Won!</h1>
          <p className="solution">{solution}</p>
          <p>You found the word in {turn} guesses</p>
          <p>Score: {score}</p>
          <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Name</label>
                <input type="text" id="letterCount" name="Name" value={formData.Name} onChange={handleChange} required/>
                <br/>
                <button type="submit">Submit</button>
            </form> 
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Sorry, you lost</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time</p>
          <button onClick={()=> window.location.reload()}>Retry</button>
        </div>
      )}
    </div>
  )
}