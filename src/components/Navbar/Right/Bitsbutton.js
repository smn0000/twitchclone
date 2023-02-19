import { BiSend } from "react-icons/bi"

const Bitsbutton = () => {
  return (
    <div className="flex relative h-2/3 ml-3 items-center justify-center rounded bg-black-600 hover:bg-black-500 p-3">
        <BiSend size={'20px'} className="-rotate-90"/>
        <span className="ml-2">Get Bits</span> 
    </div>
   
  )
}

export default Bitsbutton