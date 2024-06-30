import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Score() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5080/v1/score')
      .then(response => {
        setData(response.data.data);
        console.log(response.data.data.sort((a, b) => b.score - a.score));
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // Empty dependency array to run only once

  return (
    <div className='list'>
      <div className='listItem'>
          <p>Name</p>
          <p>Score</p>
          <p>letterCount</p>
      </div>
      {data.map((D)=> (
        <div className='listItem'>
          <p>{D.Name}</p>
          <p>{D.score}</p>
          <p>{D.letterCount}</p>
        </div>
      ))}
    </div>
  )
}

export default Score
