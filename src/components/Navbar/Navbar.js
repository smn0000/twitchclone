import React from 'react'
import Leftbar from './Left/Leftbar'
import Midbar from './Midbar'
import Rightbar from './Rightbar'

const Navbar = () => {
  return (
    <nav className='grid grid-cols-3 bg-black-800 h-12'>
        <Leftbar/>
        <Midbar/>
        <Rightbar/>
    </nav>
  )
}

export default Navbar