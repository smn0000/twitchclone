import { BiSend } from "react-icons/bi"
import Dropdown from "./Dropdown"

const Bitsbutton = ({id, handleToggle,toggled}) => {
  return (
    <div className="flex h-full items-center justify-center relative">
      <button className="flex h-2/3 ml-3 items-center justify-center rounded bg-black-600 px-3 hover:bg-black-500"  onClick={() => handleToggle(id)}>
        <BiSend size={'20px'} className="-rotate-90"/>
        <span className="ml-2">Get Bits</span> 
      </button>
      {toggled===id && <Dropdown/>}
    </div>
   
  )
}

export default Bitsbutton