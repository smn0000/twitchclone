import { FaEllipsisV } from "react-icons/fa"
import Moremenu from "./Moremenu"

const Morebtn = () => {
  return (
    <div className="flex relative items-center justify-center ml-3">
        <button className="flex items-center justify-center h-2/3 rounded aspect-square hover:bg-gray-700">
            <FaEllipsisV size='17px'/>
        </button>
        <Moremenu/>
  
    </div>
   )
}

export default Morebtn