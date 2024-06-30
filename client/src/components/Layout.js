import React from 'react'
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  return (
    <div className='layout'>
      <h1>
        Wordle Game
        <button onClick={()=> navigate('/')}>Game</button>
        <button onClick={()=> navigate('/score')}>Score</button>
        <button onClick={()=> navigate('/about')}>About</button>            
        </h1>
      <Outlet />
    </div>
  )
}

export default Layout
