import React from 'react'
import Leftbar from './Left/Leftbar'
import Midbar from './Mid/Midbar'
import Rightbar from './Right/Rightbar'

const Navbar = () => {
  return (
    <nav className='grid grid-cols-3 bg-black-800 h-[3.1rem] w-full fixed'>
        <Leftbar/>
        <Midbar/>
        <Rightbar/>
    </nav>
  )
}

export default Navbar