import { FaEllipsisV } from "react-icons/fa"
import Moremenu from "./Moremenu"
import { useState } from "react"

const Morebtn = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="flex relative items-center justify-center ml-3">
        <button className="flex items-center justify-center h-2/3 rounded aspect-square hover:bg-black-500" onClick={() => setOpen(!open)}>
            <FaEllipsisV size='17px'/>
        </button>
        {open && <Moremenu/>}
  
    </div>
   )
}

export default Morebtn