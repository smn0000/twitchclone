import {useState} from 'react'
import Streaminfo from './Streaminfo'


const Channellong = ({type ,name, avatar, category, viewer, title}) => {



    const [hover, setHover] = useState(false)

    const handleMouseEnter = () =>{
        setHover(true)
    }

    const handleMouseLeave = () =>{
        setHover(false)
    }

  return (  
    <a className=" flex items-center w-full hover:bg-black-600 py-[1px] cursor-pointer select-none static"  onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
     
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

       
       {hover && <Streaminfo/>}

    </a>




  )
}

export default Channellong