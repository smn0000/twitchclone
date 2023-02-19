import Rightbutton from "./Rightbutton"
import Bitsbutton from "./Bitsbutton"
import RightbarUser from "./RightbarUser"
import { useState } from "react"


const Rightbar = () => {
  
const [toggled, setToggled] = useState()

const handleToggle = (id) =>{
  if(toggled===id) setToggled(0)
  else setToggled(id)
}


  return (
    <div className='flex justify-end items-center px-2 font-medium h-full text-sm'>
      <Rightbutton type={'prime'} id={1} handleToggle={handleToggle} toggled={toggled} />
      <Rightbutton type={'notifications'} id={2} handleToggle={handleToggle} toggled={toggled}/>
      <Rightbutton type={'whispers'} id={3} handleToggle={handleToggle} toggled={toggled}/>
      <Bitsbutton id={4} handleToggle={handleToggle} toggled={toggled}/>
      <RightbarUser id={5} handleToggle={handleToggle} toggled={toggled}/>
    </div>
  )
}

export default Rightbar