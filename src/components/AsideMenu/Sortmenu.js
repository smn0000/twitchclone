import {BiStar, BiBarChart,BiCheck} from "react-icons/bi"

const Sortmenu = ({isSorted, sort, setSortMenu}) => {


    const handleSelect = (sortType)=>{
        if(isSorted && sortType === 'recommend') {
            sort()
            setSortMenu(false)
        } 
        else if(!isSorted && sortType === 'sort') {
            sort()
            setSortMenu(false)
        }
    }
  return (
    <div className='absolute top-[85%] w-5/6 ml-3 bg-black-700 rounded-lg shadow-[0px_1px_3px_0px_#000000] flex flex-col py-3 px-2 text-[0.84rem]'>
        <p className="text-gray-400 font-bold text-sm pb-2">SORT BY</p>

        <div className={!isSorted ?'bg-violet-600 rounded-md' : 'hover:bg-black-500 rounded-md'}>
            <div className=" flex items-center px-2" onClick={() => handleSelect('recommend')}>
                    <BiStar size='22px' className="mr-1"/>
                    <span className="py-1">Recommended For You</span>
                    {!isSorted && <BiCheck size='25px' className="w-1/5 ml-1" />}
            </div>
        </div>
        
        <div className={isSorted ?'bg-violet-600 rounded-md' : 'hover:bg-black-500 rounded-md'}>
            <div className="flex items-center px-2" onClick={() => handleSelect('sort')}>
                <BiBarChart size='22px' className="mr-1"/>
                <span className="py-1">Viewers (High to Low)</span>
                {isSorted && <BiCheck size='25px' className="w-1/5 ml-1"/>}
            </div>
        </div>

    </div>
  )
}

export default Sortmenu