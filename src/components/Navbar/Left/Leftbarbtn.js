import React from 'react'

const Leftbarbtn = ({text, onClick, selected, id}) => {
  return (
    <div className='flex flex-col items-center justify-center mx-5 relative' >
        <button type='button' className='hover:text-violet-600' onClick={() => onClick(id)}>{text}</button>
        {selected === id && <div className='h-[2px] w-full bg-violet-700 self-end absolute bottom-0'></div>}
    </div>
    
  )
}

export default Leftbarbtn