import React from 'react'

const Leftbarbtn = ({text}) => {
  return (
    <div className='flex flex-col items-center justify-center mx-5 relative' >
        <button type='button' className='hover:text-violet-600'>{text}</button>
        <div className='h-[2px] w-full bg-violet-700 self-end absolute bottom-0'></div>
    </div>
    
  )
}

export default Leftbarbtn