import React from 'react'
import Leftbar from './Left/Leftbar'
import Midbar from './Mid/Midbar'
import Rightbar from './Right/Rightbar'

const Navbar = () => {
  return (
    <nav className='grid grid-cols-3 bg-black-800 h-[3.1rem] w-full fixed shadow-[0_1px_2px_0px_rgba(0,0,0,1)]'>
        <Leftbar/>
        <Midbar/>
        <Rightbar/>
    </nav>
  )
}

export default Navbar