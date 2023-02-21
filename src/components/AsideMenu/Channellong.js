import React from 'react'

const Channellong = ({type ,name, avatar, category, viewer, title}) => {

const formater = (val) =>{

}

  return (  
    <div className=" flex items-center w-full">
        <div className=" w-[50px] h-[40px] py-[45x] px-[10px] flex items-center align-middle">
            <div className="h-[30px] w-[30px]"><img src={avatar} className='rounded-full bg-red-400' alt=""/></div>
        </div>
        <div className='grid grid-flow-col grid-cols-[5fr,2fr] w-full'>
            <div className='flex flex-col pl-1 overflow-hidden'>
                <p className='text-[1rem] font-medium leading-4 turnicate'>{name}</p>
                <p className=' text-sm text-gray-400 leading-4 truncate'>{category}</p>
            </div>
            <div className='flex justify-end pr-3'>
                <div className='flex items-center font-thin text-sm text-gray-300' >
                    <div className='w-2 h-2 rounded-full bg-[#FF0000]'></div>
                    <span className='pl-1'>{new Intl.NumberFormat("en",{notation: 'compact'}).format(viewer)}</span>
                </div>
            </div>
            
        </div>
       

    </div>




  )
}

export default Channellong