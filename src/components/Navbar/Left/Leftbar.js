import React from 'react'
import Leftbarbtn from './Leftbarbtn'
import Morebtn from './Morebtn'
import Logo from './Logo'



const Leftbar = () => {
  return (
    <div className=' w-1/4 flex align-middle px-2 text-xl font-medium'>
      <Logo/>
      <Leftbarbtn text='Following'/>
      <Leftbarbtn text='Browse'/>
      <Morebtn/>
    </div>
  )
}

export default Leftbar