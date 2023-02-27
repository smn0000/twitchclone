import { useState } from "react"
import Moremenu from "./Moremenu"
import Iconbutton from "../../Iconbutton"

const Morebtn = () => {

  const [open, setOpen] = useState(false)
  let disableHint = false
  open ? disableHint = true : disableHint = false

  return (
    <div className="flex relative items-center justify-center ml-3">
        <Iconbutton icon="more" text="More" hintPosition={'bottom'} func={() => setOpen(!open)} disableHint={disableHint}/>
        {open && <Moremenu/>}
  
    </div>
   )
}

export default Morebtn