import { BiArrowFromLeft , BiHeart } from "react-icons/bi";
import Channelshort from "./Channelshort";

const Asideshort = ({data, toggle}) => {

  return (
    <div className='w-[3.2rem] h-full overflow-scroll'>
        <div className="aspect-square flex items-center justify-center">
            <button className="aspect-square hover:bg-black-400 flex items-center justify-center rounded-md" onClick={()=> toggle()}>
                <BiArrowFromLeft size='25px'/>
            </button>
        </div>

        <div className="aspect-square flex items-center justify-center">
                <BiHeart size='18px'/>
        </div>

        {data.map((stream) => <Channelshort key={stream.id} name={stream.name} avatar={stream.avatar} category={stream.category} viewer={stream.viewer} title={stream.title}/>)}


    </div>
  )
}

export default Asideshort