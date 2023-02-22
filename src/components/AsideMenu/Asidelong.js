import { BiArrowFromRight , BiSortAlt2 } from "react-icons/bi";
import Channellong from "./Channellong";

const Asidelong = ({data, toggle, sort}) => {
  return (
    <div className='w-60 h-full overflow-scroll'>
        <div className="flex content-center justify-between p-3 pb-0 text-xl font-bold">
            <p>For You</p>
            <button className="aspect-square hover:bg-black-400 flex items-center justify-center rounded-md" onClick={()=> toggle()}>
                <BiArrowFromRight size='25px'/>
            </button>
        </div>

        <div className="flex items-center justify-between px-3 py-2 hover:bg-black-400">
            <div>
                <p className="text-sm font-bold">FOLLOWED CHANNELS</p>
                <p className="text-sm text-gray-400">Viewers (High to Low)</p>

            </div>
            <button onClick={() => sort()}>
                <BiSortAlt2 size='20px'/>
            </button>
           
        </div>

        {data.map((stream) => <Channellong key={stream.id} name={stream.name} avatar={stream.avatar} category={stream.category} viewer={stream.viewer} title={stream.title}/>)}

    </div>
  )
}

export default Asidelong