import React from 'react';
import axios from 'axios';

function IntroModal({ setSolution, setting, setSetting, setModal }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSetting((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentStartTime = new Date().toISOString();

    const updatesettings = {
      ...setting,
      startTime: currentStartTime,
    };
    setSetting(updatesettings);
    console.log(setting.letterCount);
    console.log(`${setting.letterRepeat}`);
    axios.post('http://localhost:5080/v1/word', {
        letterCount: parseInt(setting.letterCount), 
        repeated: `${setting.letterRepeat}`
      }).then(function (response) {
        console.log(response.data.word);
        setSolution(response.data.word);
      })
      .catch(function (error) {
        console.log(error);
      });
    setModal(false);
  };

  return (
    <div className="modal">
        <div>
            <h1>Welcome to wordle input your setting</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="letterCount">Letter Count</label>
                <input type="number" id="letterCount" name="letterCount" value={setting.letterCount} onChange={handleChange} required/>
                <br/>
                <label htmlFor="letterRepeat">
                  <input type="checkbox" id="letterRepeat" name="letterRepeat" checked={setting.letterRepeat} onChange={handleChange}/>
                  Letter Repeat
                </label>
                <button type="submit">Submit</button>
            </form>          
        </div>
    </div>
  )
}

export default IntroModal
