import { BiDotsVerticalRounded } from "react-icons/bi"
import { useState } from "react"
import Hint from "../../Hint"
import Moremenu from "./Moremenu"

const Morebtn = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="flex relative items-center justify-center ml-3">
        <button className="flex items-center justify-center h-2/3 rounded aspect-square hover:bg-black-500" onClick={() => setOpen(!open)}>
            <BiDotsVerticalRounded size='25px'/>
        </button>
        <Hint text={"More"} position="bottom"/>
        {open && <Moremenu/>}
  
    </div>
   )
}

export default Morebtn