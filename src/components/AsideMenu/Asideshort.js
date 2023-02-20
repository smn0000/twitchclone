import { BiArrowFromLeft , BiHeart } from "react-icons/bi";

const Asideshort = () => {
  return (
    <div className='w-[3.2rem] h-full'>
        <div className="aspect-square flex items-center justify-center">
            <button className="aspect-square hover:bg-black-400 flex items-center justify-center rounded-md">
                <BiArrowFromLeft size='25px'/>
            </button>
        </div>

        <div className="aspect-square flex items-center justify-center">
                <BiHeart size='18px'/>
        </div>

        <div className="bg-white flex flex-col items-center align-middle">
            <div className="bg-slate-200 w-full py-[5px] px-[10px] flex items-center align-middle">
                <div className="h-[30px] aspect-square bg-black-400"></div>
            </div>

        </div>


    </div>
  )
}

export default Asideshort