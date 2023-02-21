import React from 'react'

const Channelshort = ({type ,name, avatar, category, viewer, title}) => {

  return (  
      <div className=" flex flex-col items-center align-middle">
        <div className=" w-[50px] h-[40px] py-[45x] px-[10px] flex items-center align-middle">

          <div className="h-[30px] w-[30px]"><img src={avatar} className='rounded-full bg-red-400' alt=""/></div>

        </div>

      </div>




  )
}

export default Channelshort