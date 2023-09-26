import React, { useState } from 'react'
import NavBar from './NavBar'
import { FaBars } from 'react-icons/fa'

const Main = () => {

    const [options, setOptions] = useState(false);

  return (
    <div>
      <button id='menu' className='menu-right' onClick={() => setOptions(true)}><FaBars /> All</button>
      {
        options
         ?
         <div id='nav'>
            <NavBar />
            <button id='close' onClick={() => setOptions(false)}>x</button>
         </div> 
         : 
        null
      }
    </div>
  )
}

export default Main
