import Bitsbutton from "./Bitsbutton"
import RightbarUser from "./RightbarUser"
import { useState } from "react"
import Iconbutton from "../../Iconbutton"
import Dropdown from "./Dropdown"


const Rightbar = () => {
  
const [toggled, setToggled] = useState(0)

const handleToggle = (id) =>{
  if(toggled===id) setToggled(0)
  else setToggled(id)
}


  return (
    <div className='flex justify-end items-center px-2 font-medium h-full text-sm'>
      <div className="ml-3 h-full flex justify-center items-center relative" onClick={() => handleToggle(1)}>
        <Iconbutton icon="prime" text="Prime Loot" hintPosition="bottom" size="20px" disableHint={toggled===1 ? true : false}/>
        {toggled===1 && <Dropdown/>}
      </div>
      <div className="ml-3 h-full flex justify-center items-center relative" onClick={() => handleToggle(2)}>
        <Iconbutton icon="notification" text="Notifications" hintPosition="bottom" size="20px" disableHint={toggled===2 ? true : false}/>
        {toggled===2 && <Dropdown/>}
      </div>
      <div className="ml-3 h-full flex justify-center items-center relative" onClick={() => handleToggle(3)}>
        <Iconbutton icon="whispers" text="Whispers" hintPosition="bottom" size="20px" disableHint={toggled===3 ? true : false}/>
        {toggled===3 && <Dropdown/>} 
      </div>
      <Bitsbutton id={4} handleToggle={handleToggle} toggled={toggled}/>
      <RightbarUser id={5} handleToggle={handleToggle} toggled={toggled}/>
    </div>
  )
}

export default Rightbar