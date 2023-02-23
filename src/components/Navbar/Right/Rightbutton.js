import { BiEnvelope , BiChat, BiCrown}  from "react-icons/bi"
import Dropdown from "./Dropdown"
import Hint from "../../Hint"

const Rightbutton = ({type, id, handleToggle,toggled, hintText}) => {
  return (
    <div className="flex h-full items-center justify-center relative ml-3">
        <button className="flex h-2/3  items-center justify-center rounded aspect-square hover:bg-black-500" onClick={() => handleToggle(id)}> 
          {type === 'prime' && <BiCrown size={'20px'}/>}
          {type === 'notifications' && <BiEnvelope size={'20px'} />}
          {type === 'whispers' && <BiChat size={'20px'} />} 
        </button>
        <Hint text={hintText} position={"bottom"}/>
        {toggled===id && <Dropdown/>}
    </div>
   
     

   
  )
}

export default Rightbutton