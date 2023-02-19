import { BiEnvelope , BiChat, BiCrown}  from "react-icons/bi"
import Dropdown from "./Dropdown"

const Rightbutton = ({type, id, handleToggle,toggled}) => {
  return (
    <div className="flex h-full items-center justify-center relative">
        <button className="flex h-2/3 ml-3 items-center justify-center rounded aspect-square hover:bg-black-500" onClick={() => handleToggle(id)}> 
          {type === 'prime' && <BiCrown size={'20px'}/>}
          {type === 'notifications' && <BiEnvelope size={'20px'} />}
          {type === 'whispers' && <BiChat size={'20px'} />} 
        </button>
        {toggled===id && <Dropdown/>}
    </div>
   
     

   
  )
}

export default Rightbutton