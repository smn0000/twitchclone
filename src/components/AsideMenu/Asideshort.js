import { BiArrowFromLeft , BiHeart } from "react-icons/bi";
import Channelshort from "./Channelshort";
import Iconbutton from "../Iconbutton";

const Asideshort = ({data, toggle}) => {

  return (
    <div className='w-[3.2rem] h-full overflow-scroll'>
        <div className="aspect-square flex items-center justify-center">
          <Iconbutton icon="expand" text="Expand" func={toggle}/>
        </div>

        <div className="aspect-square flex items-center justify-center">
                <BiHeart size='18px'/>
        </div>

        {data.map((stream) => <Channelshort key={stream.id} name={stream.name} avatar={stream.avatar} category={stream.category} viewer={stream.viewer} title={stream.title}/>)}


    </div>
  )
}

export default Asideshort