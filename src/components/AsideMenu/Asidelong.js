import { BiArrowFromRight , BiSortAlt2 } from "react-icons/bi";
import Sortmenu from "./Sortmenu";
import Channellong from "./Channellong";
import { useState } from "react";

const Asidelong = ({data, toggle, sort, isSorted}) => {

    const [sortMenu, setSortMenu] = useState(false)

    const handleClick = () => {
        setSortMenu((currentValue => !currentValue))
    }

  return (
    <div className='w-60 h-full overflow-scroll'>
        <div className="flex content-center justify-between p-3 pb-0 text-xl font-bold">
            <p>For You</p>
            <button className="aspect-square hover:bg-black-400 flex items-center justify-center rounded-md" onClick={()=> toggle()}>
                <BiArrowFromRight size='25px'/>
            </button>
        </div>

        <div className="relative">
            <div onClick={handleClick} className="flex items-center justify-between w-full hover:bg-black-400 cursor-pointer px-3 py-2">
                <div>
                    <p className="text-sm font-bold">FOLLOWED CHANNELS</p>
                    {isSorted && <p className="text-sm text-gray-400">Viewers (High to Low)</p>}
                </div>
                <BiSortAlt2 size='20px'/>
            </div>
            {sortMenu && <Sortmenu isSorted={isSorted} sort={sort} setSortMenu={setSortMenu}/>}
        </div>
        

        {data.map((stream) => <Channellong key={stream.id} name={stream.name} avatar={stream.avatar} category={stream.category} viewer={stream.viewer} title={stream.title}/>)}

    </div>
  )
}

export default Asidelong